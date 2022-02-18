import { object, string, TypeOf, array } from "zod";

const payload = {
    body: object({
        name: string({
            required_error: "Name is required",
        }),
        description: string({
            required_error: "Description is required",
        }),
        detailDescription: string({
            required_error: "Detail Description is required",
        }),
        image: string({
            required_error: "Image is required",
        }),
        techStack: array(
			string({
                required_error: "Tech Stack is required"
            }),
		),
        links: array(
			string({
                required_error: "Tech Stack is required"
            }),
		),
    }),
};

const params = {
  params: object({
    projectId: string({
      required_error: "projectId is required",
    }),
  }),
};

export const createProjectSchema = object({
  ...payload,
});

export const updateProjectSchema = object({
  ...payload,
  ...params,
});

export const deleteProjectSchema = object({
  ...params,
});

export const getProjectSchema = object({
  ...params,
});

export type CreateProjectInput = TypeOf<typeof createProjectSchema>;
export type UpdateProjectInput = TypeOf<typeof updateProjectSchema>;
export type ReadProjectInput = TypeOf<typeof getProjectSchema>;
export type DeleteProjectInput = TypeOf<typeof deleteProjectSchema>;
