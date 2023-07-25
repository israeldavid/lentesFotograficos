const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hola, mundo!');
});

app.get('/listarObjetivos', (req, res) => {
  // Aquí puedes agregar la lógica para obtener la lista de tareas
  const objetivos = [
    { id: 1, descripcion: 'Sony 55mm F1.8', numeromm:55 },
    { id: 2, descripcion: 'Tamron 35mm F2.8', numeromm:35 },
    { id: 3, descripcion: 'Sony 30mm F3.5', numeromm30:0 }
  ];
  res.json(tareas);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});