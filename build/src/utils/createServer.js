"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("../routes"));
function createServer() {
    const server = (0, express_1.default)();
    server.use(express_1.default.json());
    (0, routes_1.default)(server);
    return server;
}
exports.default = createServer;
