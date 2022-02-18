import express from "express";
import config from "config";
import connect from "./utils/connect";
import log from "./utils/logger";
import routes from "./routes";

const port = config.get<number>("port");

const server = express();

server.use(express.json());

server.listen(port, async () => {
    log.info(`server listenig on port ${port}`);

    await connect();
    
    routes(server);
});