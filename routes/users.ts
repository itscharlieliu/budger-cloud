import express from "express";

const UsersRouter = express.Router();

UsersRouter.get("/", (req, res) => {
    res.send("Users");
});

export default UsersRouter;
