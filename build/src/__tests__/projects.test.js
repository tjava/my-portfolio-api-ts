"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const supertest_1 = __importDefault(require("supertest"));
const ProjectService = __importStar(require("../services/project.service"));
const createServer_1 = __importDefault(require("../utils/createServer"));
const server = (0, createServer_1.default)();
const projectInput = {
    name: "php3",
    description: "new php2.",
    detailDescription: "php2.",
    image: "https://i.imgur.com/QlRphfQ.jpg",
    techStack: ["php", "php"],
    links: ["php", "php"],
};
const projectPayload = {
    name: "php3",
    description: "new php2.",
    detailDescription: "php2.",
    image: "https://i.imgur.com/QlRphfQ.jpg",
    techStack: ["php", "php"],
    links: ["php", "php"],
    _id: "621988bf325015209a9c3e75",
    projectId: "project_28t87ihlbh",
    createdAt: "2022-02-26T01:56:15.123Z",
    updatedAt: "2022-02-26T01:56:15.123Z",
    __v: 0
};
describe("projects", () => {
    describe("get the list of all projects", () => {
        it("should return a 200 and the list of all projects", () => __awaiter(void 0, void 0, void 0, function* () {
            const findAllProjectServiceMock = jest.fn(() => [projectInput]);
            jest.spyOn(ProjectService, "findAllProject").mockImplementation(() => findAllProjectServiceMock());
            const { body, statusCode } = yield (0, supertest_1.default)(server).get(`/api/projects`);
            expect(statusCode).toBe(200);
            expect(body).toEqual([projectInput]);
            expect(findAllProjectServiceMock).toHaveBeenCalledTimes(1);
        }));
    });
    describe("create project", () => {
        it("should return a 200 and the created project", () => __awaiter(void 0, void 0, void 0, function* () {
            const createProjectServiceMock = jest.fn(() => projectPayload);
            jest.spyOn(ProjectService, "createProject").mockImplementation(() => createProjectServiceMock());
            const { body, statusCode } = yield (0, supertest_1.default)(server).post(`/api/projects`).send(projectInput);
            expect(statusCode).toBe(200);
            expect(body).toEqual(projectPayload);
            expect(createProjectServiceMock).toHaveBeenCalledTimes(1);
        }));
    });
    describe("get single project ", () => {
        it("should return a 200 and the single project", () => __awaiter(void 0, void 0, void 0, function* () {
            const findProjectServiceMock = jest.fn(() => projectPayload);
            jest.spyOn(ProjectService, "findProject").mockImplementation(() => findProjectServiceMock());
            const { body, statusCode } = yield (0, supertest_1.default)(server).get(`/api/projects/${projectPayload.projectId}`);
            expect(statusCode).toBe(200);
            expect(body).toEqual(projectPayload);
            expect(findProjectServiceMock).toHaveBeenCalledTimes(1);
        }));
    });
    describe("get single project and update it", () => {
        it("should return a 200 and the single project", () => __awaiter(void 0, void 0, void 0, function* () {
            const findAndUpdateProjectServiceMock = jest.fn(() => projectPayload);
            jest.spyOn(ProjectService, "findAndUpdateProject").mockImplementation(() => findAndUpdateProjectServiceMock());
            const { body, statusCode } = yield (0, supertest_1.default)(server).put(`/api/projects/${projectPayload.projectId}`).send(projectInput);
            expect(statusCode).toBe(200);
            expect(body).toEqual(projectPayload);
            expect(findAndUpdateProjectServiceMock).toHaveBeenCalledTimes(1);
        }));
    });
    describe("get single project and delete it", () => {
        it("should return a 200", () => __awaiter(void 0, void 0, void 0, function* () {
            jest.spyOn(ProjectService, "deleteProject").mockImplementation();
            const { body, statusCode } = yield (0, supertest_1.default)(server).delete(`/api/projects/${projectPayload.projectId}`);
            expect(statusCode).toBe(200);
        }));
    });
});
