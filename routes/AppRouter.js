const Router = require('express').Router()

const CompanyRouter = require('./CompanyRouter')
const UserRouter = require('./UserRouter')
const JobsiteRouter = require('./JobsiteRouter')

Router.get('/', (req, res) => res.send('This is root!*'))

Router.use('/companies', CompanyRouter)
Router.use('/jobsites', JobsiteRouter)
Router.use('/users', UserRouter)

module.exports = Router