const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Saludos desde NODE.JS! (modificado) 2');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto 3000 ${PORT}`);
});