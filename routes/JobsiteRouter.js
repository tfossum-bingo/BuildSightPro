const Router = require('express').Router()
const controller = require('../controllers/JobsiteController')

const multer = require('multer')
let storage = multer.memoryStorage()

Router.get('/', controller.getAll)
Router.get('/:id', controller.getOne)
Router.post('/', controller.createOne)
Router.put('/:id', controller.updateOne)
Router.delete('/:id', controller.deleteOne)

Router.get('/:id/specifications', controller.getAllJobsiteSpecifications)
Router.get('/:id/users', controller.getAllJobsiteUsers)

module.exports = Router