"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const project_controller_1 = require("./controllers/project.controller");
const skills_controller_1 = require("./controllers/skills.controller");
const validateResource_1 = __importDefault(require("./middleware/validateResource"));
const project_schema_1 = require("./schemas/project.schema");
const skill_schema_1 = require("./schemas/skill.schema");
function routes(server) {
    server.get("/home", (request, response) => response.sendStatus(200));
    server.get("/api/projects", project_controller_1.getAllProjectHandler);
    server.get("/api/projects/:projectId", (0, validateResource_1.default)(project_schema_1.getProjectSchema), project_controller_1.getProjectHandler);
    server.post("/api/projects", (0, validateResource_1.default)(project_schema_1.createProjectSchema), project_controller_1.createProjectHandler);
    server.put("/api/projects/:projectId", (0, validateResource_1.default)(project_schema_1.updateProjectSchema), project_controller_1.updateProjectHandler);
    server.delete("/api/projects/:projectId", (0, validateResource_1.default)(project_schema_1.deleteProjectSchema), project_controller_1.deleteProjectHandler);
    server.get("/api/skills", skills_controller_1.getAllSkillHandler);
    server.get("/api/skills/:skillId", (0, validateResource_1.default)(skill_schema_1.getSkillSchema), skills_controller_1.getSkillHandler);
    server.post("/api/skills", (0, validateResource_1.default)(skill_schema_1.createSkillSchema), skills_controller_1.createSkillHandler);
    server.put("/api/skills/:skillId", (0, validateResource_1.default)(skill_schema_1.updateSkillSchema), skills_controller_1.updateSkillHandler);
    server.delete("/api/skills/:skillId", (0, validateResource_1.default)(skill_schema_1.deleteSkillSchema), skills_controller_1.deleteSkillHandler);
}
exports.default = routes;
