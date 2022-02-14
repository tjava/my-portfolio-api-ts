import { Express, Request, Response } from "express"

function routes(server: Express) {
    server.get("/home", (request: Request, response: Response) => response.sendStatus(200));
}

export default routes;