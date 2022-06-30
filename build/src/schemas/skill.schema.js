"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSkillSchema = exports.deleteSkillSchema = exports.updateSkillSchema = exports.createSkillSchema = void 0;
const zod_1 = require("zod");
const payload = {
    body: (0, zod_1.object)({
        name: (0, zod_1.string)({
            required_error: "Name is required",
        }),
        image: (0, zod_1.string)({
            required_error: "Image is required",
        }),
    }),
};
const params = {
    params: (0, zod_1.object)({
        skillId: (0, zod_1.string)({
            required_error: "skillId is required",
        }),
    }),
};
exports.createSkillSchema = (0, zod_1.object)(Object.assign({}, payload));
exports.updateSkillSchema = (0, zod_1.object)(Object.assign(Object.assign({}, payload), params));
exports.deleteSkillSchema = (0, zod_1.object)(Object.assign({}, params));
exports.getSkillSchema = (0, zod_1.object)(Object.assign({}, params));
