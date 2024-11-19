const { DataTypes } = require('sequelize');
const sequelize = require('../db/database');
const Pergunta = require('../models/perguntas');
const Grupo = require('../models/grupo');
const Usuario = require('../models/usuario');

const GrupoPerguntas = sequelize.define('GrupoPerguntas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    idPergunta:{
        type: DataTypes.INTEGER,
        references: {
            model: Pergunta,
            key: 'id'
          }
    },
    idGrupo: {
        type: DataTypes.INTEGER,
        references: {
            model: Grupo,
            key: 'id'
          }
    },
    idUsuario: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: 'id'
          }

    }

})
// Associações corretas com aliases
/* GrupoPerguntas.belongsTo(Pergunta, { foreignKey: 'idPergunta', as: 'Perguntas' });
GrupoPerguntas.belongsTo(Grupo, { foreignKey: 'idGrupo', as: 'Grupo' });
GrupoPerguntas.belongsTo(Usuario, { foreignKey: 'idUsuario', as: 'Usuario' });

Pergunta.hasMany(GrupoPerguntas, { foreignKey: 'idPergunta', as: 'GrupoPerguntas' });
Grupo.hasMany(GrupoPerguntas, { foreignKey: 'idGrupo', as: 'GrupoPerguntas' });
Usuario.hasMany(GrupoPerguntas, { foreignKey: 'idUsuario', as: 'GrupoPerguntas' });
 */

module.exports = GrupoPerguntas