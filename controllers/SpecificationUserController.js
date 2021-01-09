const { SpecificationUser, Specification } = require('../models')
const { ValidationError } = require('sequelize');

const getAll = async (req, res) => {
    try {
        const entities = await SpecificationUser.findAll()
        res.send(entities)
    } catch (error) {
        throw error
    }
}

const getOne = async (req, res) => {
    const entityId = req.params.id
    try {
        const entity = await SpecificationUser.findByPk(entityId, {
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
    try {
        let entityBody = {
            ...req.body
        }
        let entity = SpecificationUser.build(entityBody)
        await entity.validate()
        await entity.save()
        
        const updatedSpecification = await Specification.findByPk(entityBody.specificationId, {
            include: [
                {
                    all: true,
                    nested: true
                }
            ]
        })
        res.send(updatedSpecification)
    } catch (error) {
        if (error instanceof ValidationError) {
            return console.error('Captured validation error: ', error.errors[0].message);
        }
        throw error
    }
}

const updateOne = async (req, res) => {
    console.log(`HIT account UpdateOne:`, req.body)
    try {
        let entity = parseInt(req.params.id)
        let updatedEntity = await SpecificationUser.update(req.body, {
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
        await SpecificationUser.destroy({
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


module.exports = {
    getAll,
    getOne,
    createOne,
    updateOne,
    deleteOne
}
