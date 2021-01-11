const path = require('path')
const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const cors = require("cors");
const AppRouter = require("./routes/AppRouter");

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client', 'build')))

app.use("/api", AppRouter);
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
)
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`));
