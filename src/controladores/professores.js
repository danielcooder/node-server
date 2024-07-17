
const professores = require('../bancodedados');

const filtrarProfessores = (req, res) => {
    const { stack } = req.query;
    let resultado = professores

    console.log('cheguei no controlador de listagem do professor');

    if (stack) { 
        
        resultado = professores.filter((professores) => {
            return professores.stack === stack
        });
    }

    res.send(resultado)

};

const encontrarUmProfessor = (req, res) => {
  
    const professorEncontrado = professores.find((professor) => {

        return professor.id === Number(req.params.id);
    })
     
    res.send(professorEncontrado);
}

module.exports = {

    filtrarProfessores,
    encontrarUmProfessor

}