import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId },
    Nome: { type: String, required: true},
    Autor: { type: String, required: true},
    Editora: { type: String, required: true}
}, {versionKey: false});

const livro = mongoose.model("livros", livroSchema);

export default livro;
