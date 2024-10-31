const express = require('express');
const app = express();
const cors = require('cors');

const port = 8888;

app.use(express.json());

{origin: ['http://localhost:8888', 'http://127.0.0.1:8888']}

app.use(express.static('public'));
app.use(cors());

//rotas 

//listen
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
  