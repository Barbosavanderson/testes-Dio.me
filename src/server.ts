import { appendFile } from "fs";
import {app} from "./app"
import *as http from "http"



const server = http.createServer(app);

const port = process.env.PORT

server.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});