const UsuarioDAO = require('../dao/usuarios_dao')
const bcrypt = require('bcryptjs');

module.exports = class UsuarioController{
    static async registrar(req,res){
        try{
            const {email, nome, sobrenome, nickName, senha, dataNascimento, classificacao } = req.body
            const salt = await bcrypt.genSalt(12);
            const passwordHash = await bcrypt.hash(senha, salt);
            const emailexiste = await UsuarioDAO.verificarEmailExistente(email);
            if(emailexiste){
                res.status(201).json("Este "+ email + "email já existe");
                return;
            }
            const Usuario = ({
                email, 
                nome, 
                sobrenome, 
                nickName, 
                senha: passwordHash,
                dataNascimento, 
                classificacao 
            });
           const result = await UsuarioDAO.inserirUsuario(Usuario);
            res.status(201).json(result);
        }catch(e){
            res.status(401).json("erro" + e);
            console.log(e);
        }
        
    }

    static async login(req, res){
        try{
            const {email, senha} = req.body;
            const usuarioExiste = await UsuarioDAO.buscarUsuarios(email, senha);
            if(usuarioExiste){
                res.status(201).json("usuario encontrado");
                return;
            }
            
            res.status(201).json("usuario não encontrado encontrado");

        }catch{
            res.status(401).json("Usuário não encontrado");
        }
    }
}