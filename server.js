//import http from "http" ;
import "dotenv/config";
import app from "./src/app.js";

const PORT = 3000;

const rotas = {
    "/": "Página base",
    "/pag2": "Página 2"
};

/*const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(rotas[req.url]);
});
*/

app.listen(PORT, () => {
    console.log("\n\nservidor escutando!");
});