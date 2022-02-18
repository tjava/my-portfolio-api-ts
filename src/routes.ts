import { Express, Request, Response } from "express"
import { createProjectHandler, deleteProjectHandler, getAllProjectHandler, getProjectHandler, updateProjectHandler } from "./controllers/project.controller";
import { createSkillHandler, deleteSkillHandler, getAllSkillHandler, getSkillHandler, updateSkillHandler } from "./controllers/skills.controller";
import validateResource from "./middleware/validateResource";
import { createProjectSchema, deleteProjectSchema, getProjectSchema, updateProjectSchema } from "./schemas/project.schema";
import { createSkillSchema, deleteSkillSchema, getSkillSchema, updateSkillSchema } from "./schemas/skill.schema";

function routes(server: Express) {
    server.get("/home", (request: Request, response: Response) => response.sendStatus(200));
    
    server.get("/api/projects", getAllProjectHandler);
    server.get("/api/projects/:projectId", validateResource(getProjectSchema), getProjectHandler);
    server.post("/api/projects", validateResource(createProjectSchema), createProjectHandler);
    server.put("/api/projects/:projectId", validateResource(updateProjectSchema), updateProjectHandler);
    server.delete("/api/projects/:projectId", validateResource(deleteProjectSchema), deleteProjectHandler);

    server.get("/api/skills", getAllSkillHandler);
    server.get("/api/skills/:skillId", validateResource(getSkillSchema), getSkillHandler);
    server.post("/api/skills", validateResource(createSkillSchema), createSkillHandler);
    server.put("/api/skills/:skillId", validateResource(updateSkillSchema), updateSkillHandler);
    server.delete("/api/skills/:skillId", validateResource(deleteSkillSchema), deleteSkillHandler);
}

export default routes;