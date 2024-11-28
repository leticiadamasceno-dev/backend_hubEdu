const express = require('express');
const cors = require('cors');
const sequelize = require('./db/database');

// Importação de controladores e modelos
const materiasController = require('./controllers/materias_controller');

// Importação de rotas
const rotaUsuario = require('./routes/usuarios_rotas');
const rotaPerguntas = require('./routes/perguntas_rota');
const rotaGrupo = require('./routes/grupos_rota');
const rotaProva = require('./routes/prova_rota');
const respostasRoutes = require('./routes/respostas_rota');

const app = express();
const port = 8888;

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); // Para interpretar form-data
app.use(cors({
  origin: ['http://localhost:8888', 'http://127.0.0.1:8888']
}));
app.use(express.static('public'));

sequelize.sync({ alter: true })
  .then(() => {
    console.log('Banco de dados sincronizado com sucesso!');
    materiasController.criarMateriasMockadas(); // Mock para criar matérias
  })
  .catch((err) => {
    console.error('Erro ao sincronizar o banco de dados:', err);
  });
  
app.use('/usuarios', rotaUsuario);
app.use('/perguntas', rotaPerguntas);
app.use('/grupos', rotaGrupo);
app.use('/prova', rotaProva);
app.use('/respostas', respostasRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
