const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/', controller.getAll)
Router.get('/:id', controller.getOne)
Router.post('/', controller.createOne)
Router.put('/:id', controller.updateOne)
Router.delete('/:id', controller.deleteOne)
Router.post('/login', controller.signIn)

module.exports = Router