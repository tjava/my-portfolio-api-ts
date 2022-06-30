"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const nanoid_1 = require("nanoid");
const nanoid = (0, nanoid_1.customAlphabet)("abcdefghijklmnopqrstuvwxyz0123456789", 10);
const skillSchema = new mongoose_1.default.Schema({
    skillId: {
        type: String,
        required: true,
        unique: true,
        default: () => `skill_${nanoid()}`,
    },
    name: { type: String, required: true },
    image: { type: String, required: true },
}, {
    timestamps: true,
});
const SkillModel = mongoose_1.default.model("Skill", skillSchema);
exports.default = SkillModel;
