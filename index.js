const express = require('express');
const cors = require('cors');
const sequelize = require('./db/database');
const path = require('path');


// Importação de controladores e modelos
const materiasController = require('./controllers/materias_controller');

// Importação de rotas
const rotaUsuario = require('./routes/usuarios_rotas');
const rotaPerguntas = require('./routes/perguntas_rota');
const rotaGrupo = require('./routes/grupos_rota');
const rotaProva = require('./routes/prova_rota');
const respostasRoutes = require('./routes/respostas_rota');

const app = express();
const port = 8000;
//config json response
app.use(express.json());
app.use(cors({origin: ['http://192.168.5.18:8000']}))
app.use(express.static('public'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


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
  console.log(`Servidor rodando em http://10.0.2.2:${port}`);
});
  