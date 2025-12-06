import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'aguasvivas2025_fallback_seguro_muito_f_forte';

export const createTokenUser = (usuario, req, res) => {
  const token = jwt.sign(
    { id: usuario.id, nome: usuario.nome, email: usuario.email },
    JWT_SECRET,
    { expiresIn: '7d'}
  );

  res.status(200).json({
    success: true,
    message: 'Login realizado com sucesso!',
    usuario: { id: usuario.id, nome: usuario.nome, email: usuario.email },
    token
  });
};