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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProjectHandler = exports.getProjectHandler = exports.getAllProjectHandler = exports.updateProjectHandler = exports.createProjectHandler = void 0;
const project_service_1 = require("../services/project.service");
function createProjectHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = req.body;
        const project = yield (0, project_service_1.createProject)(Object.assign({}, body));
        return res.send(project);
    });
}
exports.createProjectHandler = createProjectHandler;
function updateProjectHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const projectId = req.params.projectId;
        const update = req.body;
        const project = yield (0, project_service_1.findProject)({ projectId });
        if (!project) {
            return res.sendStatus(404);
        }
        const updatedProject = yield (0, project_service_1.findAndUpdateProject)({ projectId }, update, {
            new: true,
        });
        return res.send(updatedProject);
    });
}
exports.updateProjectHandler = updateProjectHandler;
function getAllProjectHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const project = yield (0, project_service_1.findAllProject)();
        if (!project) {
            return res.sendStatus(404);
        }
        return res.send(project);
    });
}
exports.getAllProjectHandler = getAllProjectHandler;
function getProjectHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const projectId = req.params.projectId;
        const project = yield (0, project_service_1.findProject)({ projectId });
        if (!project) {
            return res.sendStatus(404);
        }
        return res.send(project);
    });
}
exports.getProjectHandler = getProjectHandler;
function deleteProjectHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const projectId = req.params.projectId;
        const project = yield (0, project_service_1.findProject)({ projectId });
        if (!project) {
            return res.sendStatus(404);
        }
        yield (0, project_service_1.deleteProject)({ projectId });
        return res.sendStatus(200);
    });
}
exports.deleteProjectHandler = deleteProjectHandler;
