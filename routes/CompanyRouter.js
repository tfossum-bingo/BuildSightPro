const Router = require('express').Router()
const controller = require('../controllers/CompanyController')

Router.get('/', controller.getAll)
Router.get('/:id', controller.getOne)
Router.post('/', controller.createOne)
Router.put('/:id', controller.updateOne)
Router.delete('/:id', controller.deleteOne)

Router.get('/:id/jobsites', controller.getAllJobsites)

module.exports = Router
