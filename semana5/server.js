const express = require('express');
const app = express();

// Permitir que el servidor entienda datos en formato JSON
app.use(express.json());

// 1. Ruta raíz
app.get('/', (req, res) => {
  res.send('Servidor activo');
});

// 2. Ruta de saludo
app.get('/saludo', (req, res) => {
  res.send('Hola comunidad');
});

// 3. Ruta con parámetro dinámico
app.get('/mensaje/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send('Hola ' + nombre);
});

// 4. Ruta POST para recibir reportes
app.post('/reporte', (req, res) => {
  const mensaje = req.body.mensaje;
  res.json({
    estado: "Reporte recibido",
    mensaje: mensaje
  });
});

// Encender el servidor
app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});