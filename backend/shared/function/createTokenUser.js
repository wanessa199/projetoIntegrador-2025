import jwt from 'jsonwebtoken';

export const createTokenUser = (usuario, req, res) => {
    const token = jwt.sign(
        { id: usuario.id, nome: usuario.nome, email: usuario.email },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
    );

    res.status(200).json({
        success: true,
        message: 'Login realizado com sucesso!',
        usuario: {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email
        },
        token
    });
};