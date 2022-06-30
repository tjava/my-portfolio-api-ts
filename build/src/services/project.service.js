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
exports.deleteProject = exports.findAndUpdateProject = exports.findProject = exports.findAllProject = exports.createProject = void 0;
const project_model_1 = __importDefault(require("../models/project.model"));
function createProject(input) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield project_model_1.default.create(input);
            return result;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.createProject = createProject;
function findAllProject() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield project_model_1.default.find({})
                .select("name")
                .select("description")
                .select("image")
                .select("projectId");
            return result;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.findAllProject = findAllProject;
function findProject(query, options = { lean: true }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield project_model_1.default.findOne(query, {}, options);
            return result;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.findProject = findProject;
function findAndUpdateProject(query, update, options) {
    return __awaiter(this, void 0, void 0, function* () {
        return project_model_1.default.findOneAndUpdate(query, update, options);
    });
}
exports.findAndUpdateProject = findAndUpdateProject;
function deleteProject(query) {
    return __awaiter(this, void 0, void 0, function* () {
        return project_model_1.default.deleteOne(query);
    });
}
exports.deleteProject = deleteProject;
