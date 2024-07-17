const express = require('express');

const { filtrarProfessores, encontrarUmProfessor } = require('./controladores/professores');

const app = express();

const primeiroIntermediario = (req, res, next) => {
console.log('Passei no primeiro intermediario');

next();

}

const segundoIntermediario = (req, res, next) => {
 console.log('Passei no segundo intermediario');

 next();
}

const intermediarioRota = (req, res, next) => {
 console.log('Passei no intermediario da rota');

 next();
}
 
app.use(primeiroIntermediario);
app.use(segundoIntermediario);


 //localhost:3000/professores/:id
  app.get('/professores', segundoIntermediario, intermediarioRota, filtrarProfessores);

//localhost:3000/professores/3
app.get('/professores/:id', encontrarUmProfessor);


app.listen(3000);