const Usuario =  require('../models/usuario');

module.exports = class UsuarioController{
    static async registrar(req,res){
        res.json("Ola aluno");
    }
}