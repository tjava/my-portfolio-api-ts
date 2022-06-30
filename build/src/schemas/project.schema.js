"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProjectSchema = exports.deleteProjectSchema = exports.updateProjectSchema = exports.createProjectSchema = void 0;
const zod_1 = require("zod");
const payload = {
    body: (0, zod_1.object)({
        name: (0, zod_1.string)({
            required_error: "Name is required",
        }),
        description: (0, zod_1.string)({
            required_error: "Description is required",
        }),
        detailDescription: (0, zod_1.string)({
            required_error: "Detail Description is required",
        }),
        image: (0, zod_1.string)({
            required_error: "Image is required",
        }),
        techStack: (0, zod_1.array)((0, zod_1.string)({
            required_error: "Tech Stack is required",
        })),
        links: (0, zod_1.array)((0, zod_1.string)({
            required_error: "Tech Stack is required",
        })),
    }),
};
const params = {
    params: (0, zod_1.object)({
        projectId: (0, zod_1.string)({
            required_error: "projectId is required",
        }),
    }),
};
exports.createProjectSchema = (0, zod_1.object)(Object.assign({}, payload));
exports.updateProjectSchema = (0, zod_1.object)(Object.assign(Object.assign({}, payload), params));
exports.deleteProjectSchema = (0, zod_1.object)(Object.assign({}, params));
exports.getProjectSchema = (0, zod_1.object)(Object.assign({}, params));
