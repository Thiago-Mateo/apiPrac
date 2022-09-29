import express from 'express';
import mongoose from 'mongoose';


const PORT = process.env.PORT || 3000;
//const DB = proces.env.DB ||

const app = express();

// mongoose.connect(DB)
//   .then(() => { console.log('Se conecto exitosamente') })
//   .catch((err) => { console.err(err) });

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Funciona todo bien');
});


app.listen(PORT, () => {
  console.log('Funcionando en puerto:' + PORT);
});
