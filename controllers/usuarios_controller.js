const UsuarioDAO = require('../dao/usuarios_dao');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'nossosecret';

module.exports = class UsuarioController {
    static async registrar(req, res) {
        try {
            const { email, nome, sobrenome, nickName, senha, dataNascimento, classificacao } = req.body;
            const salt = await bcrypt.genSalt(12);
            const passwordHash = await bcrypt.hash(senha, salt);
            const emailexiste = await UsuarioDAO.verificarEmailExistente(email);
            if (emailexiste) {
                res.status(201).json("Este " + email + " já existe");
                return;
            }
            const Usuario = {
                email,
                nome,
                sobrenome,
                nickName,
                senha: passwordHash,
                dataNascimento,
                classificacao
            };
            const result = await UsuarioDAO.inserirUsuario(Usuario);
            res.status(201).json(result);
        } catch (e) {
            res.status(401).json("Erro: " + e);
            console.log(e);
        }
    }

    static async login(req, res) {
        try {
            const { email, senha } = req.body;
            const usuarioExiste = await UsuarioDAO.buscarUsuarios(email, senha);

            if (usuarioExiste) {
                // Gere o token JWT
                const token = jwt.sign({ id: usuarioExiste.id, email: usuarioExiste.email }, JWT_SECRET, {
                    expiresIn: '1h' // O token expira em 1 hora
                });

                // Retorne o token e uma mensagem de sucesso
                return res.status(200).json({ message: "Usuário autenticado com sucesso", token: token });
            } else {
              
                return res.status(401).json("Usuário não encontrado ou senha incorreta");
            }
        } catch (err) {
            console.log(err);
            res.status(500).json("Erro no servidor ao tentar fazer login");
        }
    }
};
