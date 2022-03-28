import { Request, Response } from "express";
import { CreateSkillInput, UpdateSkillInput } from "../schemas/skill.schema";
import {
  createSkill,
  deleteSkill,
  findAllSkill,
  findAndUpdateSkill,
  findSkill,
} from "../services/skill.service";

export async function createSkillHandler(
  req: Request<{}, {}, CreateSkillInput["body"]>,
  res: Response
) {
  const body = req.body;

  const skill = await createSkill({ ...body });

  return res.status(200).json({ status: "successful", skill });
}

export async function updateSkillHandler(
  req: Request<UpdateSkillInput["params"]>,
  res: Response
) {
  const skillId = req.params.skillId;
  const update = req.body;

  const skill = await findSkill({ skillId });

  if (!skill) {
    return res.sendStatus(404);
  }

  const updatedSkill = await findAndUpdateSkill({ skillId }, update, {
    new: true,
  });

  return res.send(updatedSkill);
}

export async function getAllSkillHandler(req: Request, res: Response) {
  const skill = await findAllSkill();

  if (!skill) {
    return res.sendStatus(404);
  }

  return res.send(skill);
}

export async function getSkillHandler(
  req: Request<UpdateSkillInput["params"]>,
  res: Response
) {
  const skillId = req.params.skillId;
  const skill = await findSkill({ skillId });

  if (!skill) {
    return res.sendStatus(404);
  }

  return res.send(skill);
}

export async function deleteSkillHandler(
  req: Request<UpdateSkillInput["params"]>,
  res: Response
) {
  const skillId = req.params.skillId;

  const skill = await findSkill({ skillId });

  if (!skill) {
    return res.sendStatus(404);
  }

  await deleteSkill({ skillId });

  return res.sendStatus(200);
}
