const express = require('express');
const app = express();
const cors = require('cors');
const sequelize = require('./db/database'); // Certifique-se que o caminho está correto

require('./models/materias');
require('./models/grupo');
require('./models/perguntas');
require('./models/grupo_perguntas');
require('./models/usuario');

const gruposController = require('./controllers/grupos_controller');

const port = 8888;

app.use(express.json());
app.use(cors());

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
const rotaPerguntas = require('./routes/perguntas_rota');
const rotaGrupo = require('./routes/grupos_rota');
app.use('/usuarios/', rotaUsuario);
app.use('/perguntas/', rotaPerguntas);
app.use('/grupos/', rotaGrupo);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
