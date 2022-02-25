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
    // projectId: expect.any(String),
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
            const createProjectServiceMock = jest.fn((): any => projectInput);
            
            jest.spyOn(ProjectService, "createProject").mockImplementation(() => createProjectServiceMock());

            const {body, statusCode} = await supertest(server).post(`/api/projects`).send(projectInput);
            
            expect(statusCode).toBe(200);

            expect(body).toEqual(projectInput);

            expect(createProjectServiceMock).toHaveBeenCalledTimes(1);
        });
    });

    // describe("given single project ", () => {
    //     it("should return a 200 and the single project", async () => {
    //         const findProjectServiceMock = jest.fn((): any => projectInput);
                
    //         const project = jest.spyOn(ProjectService, "findProject").mockImplementation(() => findProjectServiceMock());

    //         const {body, statusCode} = await supertest(server).get(`/api/projects/${findProjectServiceMock._id}`);
            
    //         expect(statusCode).toBe(200);

    //         expect(body).toEqual(projectInput);id

    //         expect(findProjectServiceMock).toHaveBeenCalledTimes(1);

    //         // const createProjectServiceMock = jest.spyOn(ProjectService, "createProject");

    //         // const projectId = "project_23";
            
    //         // const {body, statusCode} = await supertest(server).get(`/api/projects/${projectId}`);
            
    //         // expect(true).toBe(true);

    //         // expect(body.name).toEqual(project.name);
    //     });
    // });
});