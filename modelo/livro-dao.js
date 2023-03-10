let Livro = require ('./livro-schema');

obterLivros = async () => {
    const conjLivros = Livro.find();
    return(
        conjLivros
    )
};

incluir = (livro) => {
    const incLivro = Object.create(JSON.parse(livro))
};

excluir = (codigo) => {
    db.collection(Livro).deleteOne(JSON.parse({"_id": codigo}))
};

module.exports = obterLivros(), incluir(), excluir();
