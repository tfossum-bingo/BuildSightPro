const { Jobsite, Specification } = require('../models')
const { ValidationError } = require('sequelize');
const { getGeoLocation } = require('../services/GeoApiClient')

const getAll = async (req, res) => {
    try {
        const entities = await Jobsite.findAll()
        res.send(entities)
    } catch (error) {
        throw error
    }
}

const getOne = async (req, res) => {
    const entityId = req.params.id
    try {
        const entity = await Jobsite.findByPk(entityId, {
            include: [
                {
                    all: true,
                    nested: true
                }
            ]
        })
        getGeoLocation(entity)
        res.send(entity)
    } catch (error) {
        throw error
    }
}

const getAllJobsiteSpecifications = async (req, res) => {
    const entityId = req.params.id
    try {
        const entities = await Specification.findAll({
            where: {
                jobsite_id: entityId
            },
            include: [
                {
                    all: true,
                    nested: true
                }
            ]
        })
        res.send(entities)
    } catch (error) {
        throw error
    }
}

const createOne = async (req, res) => {
    try {
        let entityBody = {
            ...req.body
        }
        const newJobsite = Jobsite.build(entityBody)
        await newJobsite.validate()
        await newJobsite.save()
        await addLocationData(newJobsite)
        const entity = await Jobsite.findByPk(newJobsite.id, {
            include: [
                {
                    all: true,
                    nested: true
                }
            ]
        })
        // let entity = await Account.create(entityBody)
        res.send(entity)
    } catch (error) {
        if (error instanceof ValidationError) {
            return console.error('Captured validation error: ', error.errors[0].message);
        }
        throw error
    }
}

const updateOne = async (req, res) => {
    try {
        let entity = parseInt(req.params.id)
        let updatedEntity = await Jobsite.update(req.body, {
            where: { id: entity },
            returning: true
        })
        res.send(updatedEntity)

    } catch (error) {
        throw error
    }
}

const deleteOne = async (req, res) => {
    try {
        let entityId = parseInt(req.params.id)
        await Jobsite.destroy({
            where: { id: entityId }
        })
        res.send({
            message: `Deleted account with id of ${entityId}`,
            options: {
                deleted: true,
                recordId: entityId
            }
        })

    } catch (error) {
        throw error
    }
}

const addLocationData = async (jobsite) => {
    const locationData = await getGeoLocation(jobsite)
    try {
        if (locationData.results.length > 0) {
            jobsite.latitude = locationData.results[0].geometry.location.lat
            jobsite.longitude = locationData.results[0].geometry.location.lng
            await jobsite.save()
        }
    } catch(error) {
        console.log('*** addLocationError: ', error)
    }
}


module.exports = {
    getAll,
    getAllJobsiteSpecifications,
    getOne,
    createOne,
    updateOne,
    deleteOne
}
