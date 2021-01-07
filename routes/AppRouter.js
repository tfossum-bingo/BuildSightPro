const Router = require('express').Router()


const CompanyRouter = require('./CompanyRouter')
const JobsiteRouter = require('./JobsiteRouter')
const SpecificationRouter = require('./SpecificationRouter')
const SpecificationUserRouter = require('./SpecificationUserRouter')
const UserRouter = require('./UserRouter')

Router.get('/', (req, res) => res.send('This is root!*'))

Router.use('/companies', CompanyRouter)
Router.use('/jobsites', JobsiteRouter)
Router.use('/specifications', SpecificationRouter)
Router.use('/specification_users', SpecificationUserRouter)
Router.use('/users', UserRouter)

module.exports = Router