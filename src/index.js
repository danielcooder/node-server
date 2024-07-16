const express = require('express');

const app = express();

const professores = [

    { id: 1, nome: 'João Alberto', stack: 'Literatura'},

    { id: 2, nome: 'Antônio Silva', stack: 'Artes'},

    { id: 3, nome: 'Maria Oliveira', stack: 'Matematica'},

    { id: 4, nome: 'Mauricio de Souza', stack: 'Biologia' },

    { id: 5, nome: 'Sergiane', stack: 'Algebra' },

    { id: 6, nome: 'Paula', stack: 'Educação financeira' },

    { id: 7, nome: 'Ana Caetano', stack: 'Historia' }
    
];

//localhost:3000/professores/:id
app.get('/professores', (req, res) => {
    const { stack } = req.query;
    let resultado = professores

    if (stack) { 

        resultado = professores.filter((professores) => {
            return professores.stack === stack
        });
    }

    res.send(resultado);

});

//localhost:3000/professores/3
app.get('/professores/:id', (req, res) => {
   const professorEncontrado = professores.find((professor) => {
    return professor.id === Number(req.params.id)
   });

    res.send(professorEncontrado);   

}); 


app.listen(3000);