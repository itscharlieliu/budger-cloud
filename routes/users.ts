import express, { Request, Response } from "express";

const UsersRouter = express.Router();

UsersRouter.get("/", (req: Request, res: Response) => {
    console.log(typeof req);
    res.send("Users");
});

export default UsersRouter;
