import express from 'express';
import cors from 'cors';
import { conn } from './config/sequelize.js';

import autenticacaoRoutes from './features/autenticacao/autenticacaoRoutes.js';
import { errorHandler } from './middlewares/errorHandler.js';

import dotenv from 'dotenv';
dotenv.config(); 

const app = express();

app.use(cors({ origin: '*', credentials: true }));
app.use(express.json());

app.use('/api/auth', autenticacaoRoutes);


app.get('/api/protegido', (req, res) => {
    res.json({ success: true, message: 'Você está autenticado!' });
});

// 404
app.use((req, res) => {
    res.status(404).json({
        success: false,
        statusCode: 404,
        message: 'Rota não encontrada'
    });
});

app.use(errorHandler);

// Inicia o banco e servidor
conn.sync().then(() => {
    console.log('Banco sincronizado!');
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
});