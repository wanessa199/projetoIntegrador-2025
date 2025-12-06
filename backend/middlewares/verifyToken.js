import jwt from 'jsonwebtoken';
import { getToken } from '../shared/function/getToken.js';


const JWT_SECRET = process.env.JWT_SECRET || 'aguasvivas2025_fallback_seguro_muito_f_forte';

export const verifyToken = (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            const err = new Error("O cabeçalho 'authorization' é obrigatório e deve conter um token Bearer");
            err.statusCode = 401;
            throw err;
        }

        const token = getToken(req);
        if (!token) {
            const err = new Error("Esperado formato: 'Bearer <token>'. Verifique se o token está presente e corretamente formatado!");
            err.statusCode = 401;
            throw err;
        }

        // AQUI ESTAVA O PROBLEMA → agora tá resolvido
        const verified = jwt.verify(token, JWT_SECRET);
        req.usuario = verified;
        next();

    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            error.message = 'Token expirado. Por favor, faça login novamente';
            error.statusCode = 401;
        } else if (error.name === 'JsonWebTokenError') {
            error.message = 'Token inválido. O token fornecido está mal formatado ou corrompido';
            error.statusCode = 401;
        }
        next(error);
    }
};