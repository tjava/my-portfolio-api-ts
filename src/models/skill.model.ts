import mongoose from "mongoose";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 10);

export interface SkillInput {
  name: string;
  image: string;
}

export interface SkillDocument extends SkillInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const skillSchema = new mongoose.Schema(
  {
    skillId: {
      type: String,
      required: true,
      unique: true,
      default: () => `skill_${nanoid()}`,
    },
    name: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const SkillModel = mongoose.model<SkillDocument>("Skill", skillSchema);

export default SkillModel;
