var banco = require("mongoose");
let options = [
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
];

banco
    .connect(
        "mongodb://admin:admin@localhost:27017/?authMechanism=DEFAULT"
    )

    .then( () => {
        console.log('Conectado ao MongoDB!');
    })

    .catch( (err) => console.log(err))

banco.Promisse = global.Promisse;
module.exports = banco;
