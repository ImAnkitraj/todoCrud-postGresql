const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const indexRoutes = require('./routes/index')
const PORT = process.env.PORT||3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(indexRoutes);

app.listen(PORT, async ()=>(console.log('Server started')))
