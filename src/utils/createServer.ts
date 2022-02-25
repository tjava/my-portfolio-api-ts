import express from "express";
import routes from "../routes";

function  createServer() {
    
    const server = express();

    server.use(express.json());

    routes(server);

    return server
}

export default createServer;