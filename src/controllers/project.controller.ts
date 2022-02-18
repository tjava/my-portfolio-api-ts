import { Request, Response } from "express";
import {
  CreateProjectInput,
  UpdateProjectInput,
} from "../schemas/project.schema";
import {
  createProject,
  deleteProject,
  findAllProject,
  findAndUpdateProject,
  findProject,
} from "../services/project.service";

export async function createProjectHandler(
  req: Request<{}, {}, CreateProjectInput["body"]>,
  res: Response
) {

  const body = req.body;

  const project = await createProject({ ...body });

  return res.send(project);
}

export async function updateProjectHandler(
  req: Request<UpdateProjectInput["params"]>,
  res: Response
) {

  const projectId = req.params.projectId;
  const update = req.body;

  const project = await findProject({ projectId });

  if (!project) {
    return res.sendStatus(404);
  }

  const updatedProject = await findAndUpdateProject({ projectId }, update, {
    new: true,
  });

  return res.send(updatedProject);
}

export async function getAllProjectHandler(req: Request, res: Response) {
  const project = await findAllProject();

  if (!project) {
    return res.sendStatus(404);
  }

  return res.send(project);
}

export async function getProjectHandler(
  req: Request<UpdateProjectInput["params"]>,
  res: Response
) {
  const projectId = req.params.projectId;
  const project = await findProject({ projectId });

  if (!project) {
    return res.sendStatus(404);
  }

  return res.send(project);
}

export async function deleteProjectHandler(
  req: Request<UpdateProjectInput["params"]>,
  res: Response
) {
  const projectId = req.params.projectId;

  const project = await findProject({ projectId });

  if (!project) {
    return res.sendStatus(404);
  }

  await deleteProject({ projectId });

  return res.sendStatus(200);
}
