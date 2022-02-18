import { omit } from "lodash";
import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import ProjectModel, {
  ProjectDocument,
  ProjectInput,
} from "../models/project.model";

export async function createProject(input: ProjectInput) {

  try {
    const result = await ProjectModel.create(input);
    return result;
  } catch (error) {
    throw error;
  }
}

export async function findAllProject() {

  try {
    const result = await ProjectModel.find({}).select("name").select("description").select("image").select("projectId");
    return result;
  } catch (error) {

    throw error;
  }
}

export async function findProject(
  query: FilterQuery<ProjectDocument>,
  options: QueryOptions = { lean: true }
) {

  try {
    const result = await ProjectModel.findOne(query, {}, options);
    return result;
  } catch (error) {

    throw error;
  }
}

export async function findAndUpdateProject(
  query: FilterQuery<ProjectDocument>,
  update: UpdateQuery<ProjectDocument>,
  options: QueryOptions
) {
  return ProjectModel.findOneAndUpdate(query, update, options);
}

export async function deleteProject(query: FilterQuery<ProjectDocument>) {
  return ProjectModel.deleteOne(query);
}
