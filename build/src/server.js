"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("config"));
const connect_1 = __importDefault(require("./utils/connect"));
const logger_1 = __importDefault(require("./utils/logger"));
const createServer_1 = __importDefault(require("./utils/createServer"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const yamljs_1 = __importDefault(require("yamljs"));
const port = config_1.default.get("port");
const swaggerJsDocs = yamljs_1.default.load("./docs.yaml");
const server = (0, createServer_1.default)();
server.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerJsDocs));
server.listen(() => __awaiter(void 0, void 0, void 0, function* () {
    logger_1.default.info(`server listenig on port ${port}`);
    yield (0, connect_1.default)();
}));
