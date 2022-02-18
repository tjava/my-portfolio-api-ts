import { omit } from "lodash";
import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import SkillModel, {
  SkillDocument,
  SkillInput,
} from "../models/skill.model";

export async function createSkill(input: SkillInput) {

  try {
    const result = await SkillModel.create(input);
    return result;
  } catch (error) {
    throw error;
  }
}

export async function findAllSkill() {

  try {
    const result = await SkillModel.find({}).select("name").select("image");
    return result;
  } catch (error) {

    throw error;
  }
}

export async function findSkill(
  query: FilterQuery<SkillDocument>,
  options: QueryOptions = { lean: true }
) {

  try {
    const result = await SkillModel.findOne(query, {}, options);
    return result;
  } catch (error) {

    throw error;
  }
}

export async function findAndUpdateSkill(
  query: FilterQuery<SkillDocument>,
  update: UpdateQuery<SkillDocument>,
  options: QueryOptions
) {
  return SkillModel.findOneAndUpdate(query, update, options);
}

export async function deleteSkill(query: FilterQuery<SkillDocument>) {
  return SkillModel.deleteOne(query);
}
