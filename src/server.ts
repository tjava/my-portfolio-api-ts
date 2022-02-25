import config from "config";
import connect from "./utils/connect";
import log from "./utils/logger";
import createServer from "./utils/createServer";

const port = config.get<number>("port");

const server = createServer();

server.listen(port, async () => {
    log.info(`server listenig on port ${port}`);

    await connect();

});