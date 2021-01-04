const Router = require('express').Router()

const CompanyRouter = require('./CompanyRouter')
// const TodoRouter = require('./TodoRouter')
// const WeblinkRouter = require('./WeblinkRouter')

Router.get('/', (req, res) => res.send('This is root!*'))

Router.use('/companies', CompanyRouter)
// Router.use('/todos', TodoRouter)
// Router.use('/weblinks', WeblinkRouter)

module.exports = Router