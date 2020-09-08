import express, { Request, Response } from "express";

import UsersRouter from "./routes/users";

const app = express();
const PORT = 8000;

app.get("/", (req: Request, res: Response) => res.send("Express + TypeScript Server"));

app.use("/users", UsersRouter);

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
