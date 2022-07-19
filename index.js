const express = require('express');
const dotenv = require('dotenv');
const port = process.env.PORT || 3000;
dotenv.config()

const app = express();

app.get('/', (req, res) => {
    res.send(`Estoy ahora mismo en la rama MAIN y tengo esta variable de entorno EOI ${process.env.EOI}
	esto es una prueba de cambio`);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});