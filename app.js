const express = require('express');
const app = express();
const port = 3000;

// Array de animales
const animales = [
  { animal: 'Perro', color: '#234421', tienePelo: true, tiene4Patas: true },//color haxadecimal
  { animal: 'Loro', color: '#00ff23', tienePelo: true, tiene4Patas: false },
  { animal: 'tiburon',color:'#333333', tienePelo: false, tiene4Patas: false}
];
// Agrega esto antes de la definición de tus rutas
app.use(express.static('imagenes'));//usa las carpetas estaticas,en este caso la carpeta imagenes

// Configurar el motor de vistas Pug
app.set('view engine', 'pug');
app.set('views', __dirname);

// Ruta para renderizar la plantilla Pug con los datos de animales
app.get('/', (req, res) => {
  res.render('animales', { animales });
});

// Iniciar el servidor en el puerto 3000
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
