import supertest from "supertest";
import * as ProjectService from "../services/project.service";
import createServer from "../utils/createServer";

const server = createServer();


const projectInput = {
    name: "php3",
    description: "new php2.",
    detailDescription: "php2.",
    image: "https://i.imgur.com/QlRphfQ.jpg",
    techStack: ["php","php"],
    links: ["php","php"],
};

const projectPayload = {
    name: "php3",
    description: "new php2.",
    detailDescription: "php2.",
    image: "https://i.imgur.com/QlRphfQ.jpg",
    techStack: ["php","php"],
    links: ["php","php"],
    _id: "621988bf325015209a9c3e75",
    projectId: "project_28t87ihlbh",
    createdAt: "2022-02-26T01:56:15.123Z",
    updatedAt: "2022-02-26T01:56:15.123Z",
    __v: 0
};

describe("projects", () => {

    describe("get the list of all projects", () => {
        it("should return a 200 and the list of all projects", async () => {
            const findAllProjectServiceMock = jest.fn((): any => [projectInput]);
                
            jest.spyOn(ProjectService, "findAllProject").mockImplementation(() => findAllProjectServiceMock());

            const {body, statusCode} = await supertest(server).get(`/api/projects`);
            
            expect(statusCode).toBe(200);
            expect(body).toEqual([projectInput]);
            expect(findAllProjectServiceMock).toHaveBeenCalledTimes(1);
        });
    });
        
    describe("create project", () => {
        it("should return a 200 and the created project", async () => {
            const createProjectServiceMock = jest.fn((): any => projectPayload);
            
            jest.spyOn(ProjectService, "createProject").mockImplementation(() => createProjectServiceMock());

            const {body, statusCode} = await supertest(server).post(`/api/projects`).send(projectInput);

            expect(statusCode).toBe(200);
            expect(body).toEqual(projectPayload);
            expect(createProjectServiceMock).toHaveBeenCalledTimes(1);
        });
    });

    describe("get single project ", () => {
        it("should return a 200 and the single project", async () => {
            const findProjectServiceMock = jest.fn((): any => projectPayload);
                
            jest.spyOn(ProjectService, "findProject").mockImplementation(() => findProjectServiceMock());

            const {body, statusCode} = await supertest(server).get(`/api/projects/${projectPayload.projectId}`);
            
            expect(statusCode).toBe(200);
            expect(body).toEqual(projectPayload);
            expect(findProjectServiceMock).toHaveBeenCalledTimes(1);

        });
    });

    describe("get single project and update it", () => {
        it("should return a 200 and the single project", async () => {
            const findAndUpdateProjectServiceMock = jest.fn((): any => projectPayload);
                
            jest.spyOn(ProjectService, "findAndUpdateProject").mockImplementation(() => findAndUpdateProjectServiceMock());

            const {body, statusCode} = await supertest(server).put(`/api/projects/${projectPayload.projectId}`).send(projectInput);
            
            expect(statusCode).toBe(200);
            expect(body).toEqual(projectPayload);
            expect(findAndUpdateProjectServiceMock).toHaveBeenCalledTimes(1);

        });
    });

    describe("get single project and delete it", () => {
        it("should return a 200", async () => {
            jest.spyOn(ProjectService, "deleteProject").mockImplementation();

            const {body, statusCode} = await supertest(server).delete(`/api/projects/${projectPayload.projectId}`);
            
            expect(statusCode).toBe(200);

        });
    });
});