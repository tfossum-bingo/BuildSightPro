const { User } = require('../models')
const { ValidationError } = require('sequelize');

const getAll = async (req, res) => {
    try {
        const entities = await User.findAll()
        res.send(entities)
    } catch (error) {
        throw error
    }
}

const getOne = async (req, res) => {
    const entityId = req.params.id
    try {
        const entity = await User.findByPk(entityId, {
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
        const newAccount = User.build(entityBody)
        await newAccount.validate()
        await newAccount.save()
        // let entity = await Account.create(entityBody)
        res.send(newAccount)
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
        let updatedEntity = await User.update(req.body, {
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
        await User.destroy({
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


const signIn = async (req, res, next) => {
    const userEmail = req.body.email
    // const accountPassword = req.body.password
    try {
        const user = await User.findOne({
                where: {
                    email: userEmail
                    // password: accountPassword
                },
                include: [
                    {
                        all: true,
                        nested: true
                    }
                ]
            }
        )
        console.log("*****signIn: ", user)
        res.send(user)
    } catch (error) {
        console.log(error)
        return false
    }
}




module.exports = {
    getAll,
    getOne,
    createOne,
    updateOne,
    deleteOne,
    signIn
}
