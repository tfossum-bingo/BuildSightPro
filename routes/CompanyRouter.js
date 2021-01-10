const Router = require('express').Router()
const controller = require('../controllers/CompanyController')

Router.get('/', controller.getAll)
Router.post('/', controller.createOne)
Router.put('/:id', controller.updateOne)
Router.delete('/:id', controller.deleteOne)

Router.get('/:id/jobsites', controller.getAllJobsites)
Router.get('/:id/users', controller.getAllUsers)

module.exports = Router
