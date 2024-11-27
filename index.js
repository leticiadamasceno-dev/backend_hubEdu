const express = require('express');
const app = express();
const cors = require('cors');

require('./models/usuario'); 

const sequelize = require('./db/database')
const materiasController = require('./controllers/materias_controller')
require('./models/usuario');
require('./models/perguntas');
require('./models/materias');
require('./models/grupo');
require('./models/perguntas');
require('./models/grupo_perguntas');
require('./models/usuario');
require ('./models/urgencia_pergunta');
require('./models/classificacao_dificuldade_pergunta');
require('./models/provas');



const port = 8888;

app.use(express.json());

app.use(cors({
  origin: ['http://localhost:8888', 'http://127.0.0.1:8888']
}));

app.use(express.static('public'));


sequelize.sync({ force: false })
  .then(() => {
    console.log('Banco de dados sincronizado');
    materiasController.criarMateriasMockadas();
 //   gruposController.criarGruposMockados();
  })
  .catch((error) => console.error("Falha ao sincronizar banco de dados", error));

// sequelize.sync({ alter: true }) // Atualiza o esquema sem perder dados
sequelize.sync()
    .then(() => {
        console.log('Banco de dados sincronizado com sucesso!');
    })
    .catch((err) => {
        console.error('Erro ao sincronizar o banco de dados:', err);
    });

// Rotas
const rotaUsuario = require('./routes/usuarios_rotas');

app.use('/usuarios', rotaUsuario);

const rotaPerguntas = require('./routes/perguntas_rota');
const rotaGrupo = require('./routes/grupos_rota');
const rotaProva = require('./routes/prova_rota');

app.use('/usuarios/', rotaUsuario);
app.use('/perguntas/', rotaPerguntas);
app.use('/grupos/', rotaGrupo);
app.use('/prova/', rotaProva);

app.listen(port, () => {

  console.log(`Servidor rodando em http://localhost:${port}`);
});



