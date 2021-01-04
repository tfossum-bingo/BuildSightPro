## Create basic Express app
```
npm init -y
npm i express nodemon
npm i morgan cors body-parser
npm i dotenv
```

## Create basic Express routes
```
mkdir routes

touch AppRouter.js
```
Fill with the following code:
```javascript
//AppRouter.js
const Router = require('express').Router()

// const AccountRouter = require('./AccountRouter')

Router.get('/', (req, res) => res.send('This is root!*'))

// Router.use('/accounts', AccountRouter)

module.exports = Router

```
Then create the server.js
```
touch server.js
```
Fill with the following code:
```javascript
//server.js
const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path')
const AppRouter = require("./routes/AppRouter");

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client', 'build')))


app.use("/api", AppRouter);
// app.get('*', (req, res) =>
//   res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
// )
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`));
```

### Confirm working server
```
npm run dev
```
Use Insomnia to confirm that a GET to localhost:3001/api returns a "This is root!" message


## Configure the database



```
npm i sequelize pg
npm i --save-dev sequelize-cli
npx sequelize-cli init
npx sequelize-cli db:create

npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string,password:string
```
Modify the migration and the model to use standard SQL formats.

```
npx sequelize-cli db:migrate
```

```javascript
//config.js
require('dotenv').config()

module.exports = {
  "development": {
    "database": "foo_development",
    "dialect": "postgres"
  },
  "test": {
    "database": "foo_test",
    "dialect": "postgres"
  },
  "production": {
    use_env_variable: 'DATABASE_URL',
    "dialect": "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
```

npx create-react-app client

npm i axios

n





