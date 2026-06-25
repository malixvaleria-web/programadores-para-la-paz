const express = require('express');
const app = express();

app.use(express.json());
// Ruta raíz para dar la bienvenida y evitar el "Cannot GET /"
app.get('/', (req, res) => {
  res.send('🚀 Servidor de la Semana 7 - Sistema de Reportes Comunitarios Activo');
});

let reportes = [];

app.get('/reportes', (req, res) => {
  res.json(reportes);
});

app.post('/reportes', (req, res) => {

  const reporte = {
    id: reportes.length + 1,
    tipo: req.body.tipo,
    descripcion: req.body.descripcion
  };

  reportes.push(reporte);

  res.json({
    mensaje: "Reporte registrado",
    reporte: reporte
  });

});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});