const express = require('express');
const app = express();
const cors = require('cors');
const sequelize = require('./db/database')
const materiasController = require('./controllers/materias_controller')
require('./models/usuario');
require('./models/perguntas');
require('./models/materias')


const port = 8888;

app.use(express.json());

{origin: ['http://localhost:8888', 'http://127.0.0.1:8888']}

app.use(express.static('public'));
app.use(cors());

sequelize.sync({force: false})
.then(() => {
  materiasController.criarMateriasMockadas()
  console.log('Banco de dados sincronizado')
}).catch((error) => console.error("Falha ao sincronizar banco de dados", error))

//rotas 
const rotaUsuario = require('./routes/usuarios_rotas');
app.use('/usuarios/', rotaUsuario);

//listen
app.listen(port, () => {
  
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
  