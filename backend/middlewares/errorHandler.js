export const errorHandler = (error, req, res, next) => {
    console.log('Erro:', error.message);
    const statusCode = error.statusCode || 500;
    const message = error.message || 'Erro interno do servidor';

    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
};