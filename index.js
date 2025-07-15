javascript
// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/saludo', (req, res) => {
    res.json({ mensaje: '¡Hola desde tu microservicio en GitHub!' });
});

app.listen(PORT, () => {
    console.log(`Microservicio escuchando en puerto ${PORT}`);
});
