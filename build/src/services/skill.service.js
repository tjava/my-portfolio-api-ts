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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSkill = exports.findAndUpdateSkill = exports.findSkill = exports.findAllSkill = exports.createSkill = void 0;
const skill_model_1 = __importDefault(require("../models/skill.model"));
function createSkill(input) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield skill_model_1.default.create(input);
            return result;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.createSkill = createSkill;
function findAllSkill() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield skill_model_1.default.find({})
                .select("name")
                .select("image")
                .select("skillId");
            return result;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.findAllSkill = findAllSkill;
function findSkill(query, options = { lean: true }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield skill_model_1.default.findOne(query, {}, options);
            return result;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.findSkill = findSkill;
function findAndUpdateSkill(query, update, options) {
    return __awaiter(this, void 0, void 0, function* () {
        return skill_model_1.default.findOneAndUpdate(query, update, options);
    });
}
exports.findAndUpdateSkill = findAndUpdateSkill;
function deleteSkill(query) {
    return __awaiter(this, void 0, void 0, function* () {
        return skill_model_1.default.deleteOne(query);
    });
}
exports.deleteSkill = deleteSkill;
