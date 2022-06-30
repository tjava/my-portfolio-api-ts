import config from "config";
import connect from "./utils/connect";
import log from "./utils/logger";
import createServer from "./utils/createServer";
import swaggerUI from "swagger-ui-express";
import YAML from "yamljs";

const port = config.get<number>("port");

const swaggerJsDocs = YAML.load("./docs.yaml");

const server = createServer();

server.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerJsDocs));

server.listen(async () => {
  log.info(`server listenig on port ${port}`);

  await connect();
});
