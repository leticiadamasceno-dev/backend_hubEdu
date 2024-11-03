const Usuarios = require('../models/usuario')
const bcrypt = require('bcryptjs');
module.exports = class UsuarioDAO{
    static async inserirUsuario(dadosUsuario) {
        try {
          const usuario = await Usuarios.create(dadosUsuario); // Insere o usuário no banco de dados
          return usuario;
        } catch (error) {
          console.error('Erro ao inserir usuário:', error);
          throw error;
        }
      }

      static async verificarEmailExistente(email) {
        try {
          const usuarioExistente = await Usuarios.findOne({ where: { email } });
          if (usuarioExistente) {
            return true; // O email já existe no banco de dados
          }
          return false; // O email não existe
        } catch (error) {
          console.error("Erro ao verificar email:", error);
          throw error;
        }
      }

      static async buscarUsuarios(email, senha){
        try{
            const usuarioEncontrado = await Usuarios.findOne({ where: { email } });
            
            if (usuarioEncontrado) {
                console.log("Hash da senha armazenada:", usuarioEncontrado.senha);
                console.log("Senha fornecida:", senha);
                
                // Verifique a senha usando bcrypt
                const senhaValida = await bcrypt.compare(senha, usuarioEncontrado.senha);
                
                if (senhaValida) {
                    console.log("Usuário autenticado com sucesso");
                    return true;
                } else {
                    console.log("Senha incorreta");
                    return false;
                }
            } else {
                console.log("Usuário não encontrado");
                return false;
            }
        } catch(e) {
            console.log('erro ao buscar usuarios', e);
            throw e;
        }
    }
    
}

