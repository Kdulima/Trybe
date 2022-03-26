// hello-msc/index.js

const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = 3000;

const Author = require("./controllers/Author");

app.use(bodyParser.json());

app.get('/authors', Author.getAll); 

app.get('/authors/:id', Author.findById);

app.post('/authors', Author.create);

app.listen(PORT, () => { console.log(`Ouvindo a porta ${PORT}`);});