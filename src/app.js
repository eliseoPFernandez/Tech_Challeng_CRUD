import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("\n\nERRO DE CONEXÃO\n\n", erro, "\n\n");
});

conexao.once("open", () => {
    console.log("\n\nConexao com o banco feita com sucesso");
})

const app = express();
routes(app);


export default app;
