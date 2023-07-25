const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hola, mundo!');
});

app.get('/listarTareas', (req, res) => {
  // Aquí puedes agregar la lógica para obtener la lista de tareas
  const tareas = [
    { id: 1, descripcion: 'Comprar leche', estado:1 },
    { id: 2, descripcion: 'Pagar la renta', estado:1 },
    { id: 3, descripcion: 'Llamar al médico', estado:0 }
  ];
  res.json(tareas);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});