import supertest from "supertest";
import * as SkillService from "../services/skill.service";
import createServer from "../utils/createServer";

const server = createServer();


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
        it("should return a 200 and the list of all skills", async () => {
            const findAllSkillServiceMock = jest.fn((): any => [skillInput]);
                
            jest.spyOn(SkillService, "findAllSkill").mockImplementation(() => findAllSkillServiceMock());

            const {body, statusCode} = await supertest(server).get(`/api/skills`);
            
            expect(statusCode).toBe(200);
            expect(body).toEqual([skillInput]);
            expect(findAllSkillServiceMock).toHaveBeenCalledTimes(1);
        });
    });
        
    describe("create skill", () => {
        it("should return a 200 and the created skill", async () => {
            const createSkillServiceMock = jest.fn((): any => skillPayload);
            
            jest.spyOn(SkillService, "createSkill").mockImplementation(() => createSkillServiceMock());

            const {body, statusCode} = await supertest(server).post(`/api/skills`).send(skillInput);

            expect(statusCode).toBe(200);
            expect(body.status).toEqual("successful");
            expect(body.skill).toEqual(skillPayload);
            expect(createSkillServiceMock).toHaveBeenCalledTimes(1);
        });
    });

    describe("get single skill ", () => {
        it("should return a 200 and the single skill", async () => {
            const findSkillServiceMock = jest.fn((): any => skillPayload);
                
            jest.spyOn(SkillService, "findSkill").mockImplementation(() => findSkillServiceMock());

            const {body, statusCode} = await supertest(server).get(`/api/skills/${skillPayload.skill.skillId}`);
            
            expect(statusCode).toBe(200);
            expect(body).toEqual(skillPayload);
            expect(findSkillServiceMock).toHaveBeenCalledTimes(1);

        });
    });

    describe("get single skill and update it", () => {
        it("should return a 200 and the single skill", async () => {
            const findAndUpdateSkillServiceMock = jest.fn((): any => skillPayload);
                
            jest.spyOn(SkillService, "findAndUpdateSkill").mockImplementation(() => findAndUpdateSkillServiceMock());

            const {body, statusCode} = await supertest(server).put(`/api/skills/${skillPayload.skill.skillId}`).send(skillInput);
            
            expect(statusCode).toBe(200);
            expect(body).toEqual(skillPayload);
            expect(findAndUpdateSkillServiceMock).toHaveBeenCalledTimes(1);

        });
    });

    describe("get single skill and delete it", () => {
        it("should return a 200", async () => {
            jest.spyOn(SkillService, "deleteSkill").mockImplementation();

            const {body, statusCode} = await supertest(server).delete(`/api/skills/${skillPayload.skill.skillId}`);
            
            expect(statusCode).toBe(200);

        });
    });
});