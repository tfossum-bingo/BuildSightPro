const { Specification, SpecificationUser } = require('../models')
const { sendSpecEmail } = require('../services/SpecMailer')
const { ValidationError } = require('sequelize');
const upload = require('../middleware/awsUpload');
const specification = require('../models/specification');

const getAll = async (req, res) => {
    try {
        const entities = await Specification.findAll()
        res.send(entities)
    } catch (error) {
        throw error
    }
}

const getOne = async (req, res) => {
    const entityId = req.params.id
    try {
        const entity = await Specification.findByPk(entityId, {
            include: [
                {
                    all: true,
                    nested: true
                }
            ]
        })
        res.send(entity)
    } catch (error) {
        throw error
    }
}

const createOne = async (req, res) => {
    let entityBody = { ...req.body }

    try {
        let attachmentUrl = await upload(req.file)
        let newSpecification = Specification.build({ ...entityBody, attachmentUrl })
        await newSpecification.validate()
        await newSpecification.save()

        newSpecification = await Specification.findByPk(newSpecification.id, {
            include: [
                {
                    all: true,
                    nested: true
                }
            ]
        })
        sendNewSpecEmailNotification(newSpecification)
        res.send(newSpecification)
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
        let updatedEntity = await Specification.update(req.body, {
            where: { id: entity },
            returning: true
        })
        res.send(updatedEntity)

    } catch (error) {
        throw error
    }
}

const deleteOne = async (req, res) => {
    let entityId = parseInt(req.params.id)

    try {
        await SpecificationUser.destroy({
            where: {
                specification_id: entityId
            }
        })

        await Specification.destroy({
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

const sendNewSpecEmailNotification = (specification) => {
    const jobsite = specification.Jobsite
    const jobsiteUsers = specification.Jobsite.jobsiteUsers
    const emails = jobsiteUsers.map((jobsiteUser, index) => {
        return jobsiteUser.User.email
    })

    const jobsiteAddress = `${jobsite.address_1}; ${jobsite.city}, ${jobsite.state} ${jobsite.postalCode}`
    const specLink = specification.attachmentUrl
    if (emails.length > 0) {
        sendSpecEmail(emails, jobsiteAddress, specLink)
    }
}


module.exports = {
    getAll,
    getOne,
    createOne,
    updateOne,
    deleteOne
}
