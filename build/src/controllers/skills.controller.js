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
exports.deleteSkillHandler = exports.getSkillHandler = exports.getAllSkillHandler = exports.updateSkillHandler = exports.createSkillHandler = void 0;
const skill_service_1 = require("../services/skill.service");
function createSkillHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = req.body;
        const skill = yield (0, skill_service_1.createSkill)(Object.assign({}, body));
        return res.status(200).json({ status: "successful", skill });
    });
}
exports.createSkillHandler = createSkillHandler;
function updateSkillHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const skillId = req.params.skillId;
        const update = req.body;
        const skill = yield (0, skill_service_1.findSkill)({ skillId });
        if (!skill) {
            return res.sendStatus(404);
        }
        const updatedSkill = yield (0, skill_service_1.findAndUpdateSkill)({ skillId }, update, {
            new: true,
        });
        return res.send(updatedSkill);
    });
}
exports.updateSkillHandler = updateSkillHandler;
function getAllSkillHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const skill = yield (0, skill_service_1.findAllSkill)();
        if (!skill) {
            return res.sendStatus(404);
        }
        return res.send(skill);
    });
}
exports.getAllSkillHandler = getAllSkillHandler;
function getSkillHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const skillId = req.params.skillId;
        const skill = yield (0, skill_service_1.findSkill)({ skillId });
        if (!skill) {
            return res.sendStatus(404);
        }
        return res.send(skill);
    });
}
exports.getSkillHandler = getSkillHandler;
function deleteSkillHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const skillId = req.params.skillId;
        const skill = yield (0, skill_service_1.findSkill)({ skillId });
        if (!skill) {
            return res.sendStatus(404);
        }
        yield (0, skill_service_1.deleteSkill)({ skillId });
        return res.sendStatus(200);
    });
}
exports.deleteSkillHandler = deleteSkillHandler;
