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
const SkillService = __importStar(require("../services/skill.service"));
const createServer_1 = __importDefault(require("../utils/createServer"));
const server = (0, createServer_1.default)();
const skillInput = {
    name: "php3",
    image: "https://i.imgur.com/QlRphfQ.jpg",
};
const skillPayload = {
    status: "successful",
    skill: {
        name: "php3",
        image: "https://i.imgur.com/QlRphfQ.jpg",
        _id: "6219991b325015209a9c3ea1",
        skillId: "skill_3w0qviabd5",
        createdAt: "2022-02-26T03:06:03.045Z",
        updatedAt: "2022-02-26T03:06:03.045Z",
        __v: 0
    }
};
describe("skills", () => {
    describe("get the list of all skills", () => {
        it("should return a 200 and the list of all skills", () => __awaiter(void 0, void 0, void 0, function* () {
            const findAllSkillServiceMock = jest.fn(() => [skillInput]);
            jest.spyOn(SkillService, "findAllSkill").mockImplementation(() => findAllSkillServiceMock());
            const { body, statusCode } = yield (0, supertest_1.default)(server).get(`/api/skills`);
            expect(statusCode).toBe(200);
            expect(body).toEqual([skillInput]);
            expect(findAllSkillServiceMock).toHaveBeenCalledTimes(1);
        }));
    });
    describe("create skill", () => {
        it("should return a 200 and the created skill", () => __awaiter(void 0, void 0, void 0, function* () {
            const createSkillServiceMock = jest.fn(() => skillPayload);
            jest.spyOn(SkillService, "createSkill").mockImplementation(() => createSkillServiceMock());
            const { body, statusCode } = yield (0, supertest_1.default)(server).post(`/api/skills`).send(skillInput);
            expect(statusCode).toBe(200);
            expect(body.status).toEqual("successful");
            expect(body.skill).toEqual(skillPayload);
            expect(createSkillServiceMock).toHaveBeenCalledTimes(1);
        }));
    });
    describe("get single skill ", () => {
        it("should return a 200 and the single skill", () => __awaiter(void 0, void 0, void 0, function* () {
            const findSkillServiceMock = jest.fn(() => skillPayload);
            jest.spyOn(SkillService, "findSkill").mockImplementation(() => findSkillServiceMock());
            const { body, statusCode } = yield (0, supertest_1.default)(server).get(`/api/skills/${skillPayload.skill.skillId}`);
            expect(statusCode).toBe(200);
            expect(body).toEqual(skillPayload);
            expect(findSkillServiceMock).toHaveBeenCalledTimes(1);
        }));
    });
    describe("get single skill and update it", () => {
        it("should return a 200 and the single skill", () => __awaiter(void 0, void 0, void 0, function* () {
            const findAndUpdateSkillServiceMock = jest.fn(() => skillPayload);
            jest.spyOn(SkillService, "findAndUpdateSkill").mockImplementation(() => findAndUpdateSkillServiceMock());
            const { body, statusCode } = yield (0, supertest_1.default)(server).put(`/api/skills/${skillPayload.skill.skillId}`).send(skillInput);
            expect(statusCode).toBe(200);
            expect(body).toEqual(skillPayload);
            expect(findAndUpdateSkillServiceMock).toHaveBeenCalledTimes(1);
        }));
    });
    describe("get single skill and delete it", () => {
        it("should return a 200", () => __awaiter(void 0, void 0, void 0, function* () {
            jest.spyOn(SkillService, "deleteSkill").mockImplementation();
            const { body, statusCode } = yield (0, supertest_1.default)(server).delete(`/api/skills/${skillPayload.skill.skillId}`);
            expect(statusCode).toBe(200);
        }));
    });
});
