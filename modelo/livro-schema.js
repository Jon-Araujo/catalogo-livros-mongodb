let banco = require('./conexao');

const LivroSchema = new banco.Schema({
    titulo: String,
    codEditora: Number,
    resumo: String,
    autores: [String]
});

module.exports = banco.model('Livro', LivroSchema);
