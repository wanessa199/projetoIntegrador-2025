import { usuarioModel } from '../usuario/usuarioModel.js';
import bcrypt from 'bcryptjs';
import { createTokenUser } from '../../shared/function/createTokenUser.js';

export const registrar = async (req, res, next) => {
    const { nome, email, senha } = req.body;

    try {
        if (!nome || !email || !senha) {
            const err = new Error('Todos os campos são obrigatórios');
            err.statusCode = 400;
            throw err;
        }

        const usuarioExiste = await usuarioModel.findOne({ where: { email } });
        if (usuarioExiste) {
            const err = new Error('Este e-mail já está cadastrado');
            err.statusCode = 400;
            throw err;
        }

        const senhaHash = bcrypt.hashSync(senha, 10);
        const novoUsuario = await usuarioModel.create({
            nome,
            email,
            senha: senhaHash
        });

        await createTokenUser(novoUsuario, req, res);

    } catch (error) {
        next(error);
    }
};

export const login = async (req, res, next) => {
    const { email, senha } = req.body;

    try {
        if (!email || !senha) {
            const err = new Error('E-mail e senha são obrigatórios');
            err.statusCode = 400;
            throw err;
        }

        const usuario = await usuarioModel.findOne({ where: { email } });
        if (!usuario) {
            const err = new Error('Credenciais inválidas');
            err.statusCode = 401;
            throw err;
        }

        const senhaValida = bcrypt.compareSync(senha, usuario.senha);
        if (!senhaValida) {
            const err = new Error('Credenciais inválidas');
            err.statusCode = 401;
            throw err;
        }

        await createTokenUser(usuario, req, res);

    } catch (error) {
        next(error);
    }
};