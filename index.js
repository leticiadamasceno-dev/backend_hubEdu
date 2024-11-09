const express = require('express');
const app = express();
const cors = require('cors');

const sequelize = require('./db/database');
require('./models/usuario'); 

const sequelize = require('./db/database')
const materiasController = require('./controllers/materias_controller')
require('./models/usuario');
require('./models/perguntas');
require('./models/materias');
require('./models/grupo_perguntas');


const port = 8888;

app.use(express.json());

app.use(cors({
  origin: ['http://localhost:8888', 'http://127.0.0.1:8888']
}));

app.use(express.static('public'));

sequelize.sync({ force: false })
  .then(() => {
    console.log('Banco de dados sincronizado');
  })
  .catch((error) => console.error("Falha ao sincronizar banco de dados", error));

sequelize.sync({force: false})
.then(() => {
  //materiasController.criarMateriasMockadas()
  console.log('Banco de dados sincronizado')
}).catch((error) => console.error("Falha ao sincronizar banco de dados", error))

// Rotas
const rotaUsuario = require('./routes/usuarios_rotas');

app.use('/usuarios', rotaUsuario);

const rotaPerguntas = require('./routes/perguntas_rota');
app.use('/usuarios/', rotaUsuario);
app.use('/perguntas/', rotaPerguntas);

app.listen(port, () => {

  console.log(`Servidor rodando em http://localhost:${port}`);
});



