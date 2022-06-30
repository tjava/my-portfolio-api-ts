"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const nanoid_1 = require("nanoid");
const nanoid = (0, nanoid_1.customAlphabet)("abcdefghijklmnopqrstuvwxyz0123456789", 10);
const projectSchema = new mongoose_1.default.Schema({
    projectId: {
        type: String,
        required: true,
        unique: true,
        default: () => `project_${nanoid()}`,
    },
    name: { type: String, required: true },
    description: { type: String, required: true },
    detailDescription: { type: String, required: true },
    image: { type: String, required: true },
    techStack: { type: [], required: true },
    links: { type: [], required: true },
}, {
    timestamps: true,
});
const ProjectModel = mongoose_1.default.model("Project", projectSchema);
exports.default = ProjectModel;
