import mongoose from "mongoose";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 10);

export interface ProjectInput {
  name: string;
  description: string;
  detailDescription: string;
  image: string;
  techStack: any;
  links: any;
}

export interface ProjectDocument extends ProjectInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const projectSchema = new mongoose.Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

const ProjectModel = mongoose.model<ProjectDocument>("Project", projectSchema);

export default ProjectModel;
