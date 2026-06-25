const express = require('express');
const app = express();
const PORT = 3000;

// Permitir que el servidor entienda datos en formato JSON
app.use(express.json());

// 1. Ruta raíz (Mensaje de bienvenida)
app.get('/', (req, res) => {
    res.send('🚀 Servidor de la Semana 6 funcionando correctamente - Sistema de Incidencias');
});

// 2. Ruta GET para ver ejemplos de incidencias (Talento Humano / SST / Soporte)
app.get('/api/incidencias', (req, res) => {
    res.json([
        { id: 1, area: 'SST', reporte: 'Falta de señalización en la ruta de evacuación', estado: 'Pendiente' },
        { id: 2, area: 'Sistemas', reporte: 'Error de conexión con la base de datos local', estado: 'En proceso' }
    ]);
});

// Configurar el puerto de escucha
app.listen(PORT, () => {
    console.log(`Servidor de la Semana 6 ejecutándose en el puerto ${PORT}`);
});