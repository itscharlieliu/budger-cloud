import express, { Request, Response } from "express";
import mongodb from "mongodb";

import UsersRouter from "./routes/users";

const app = express();
const PORT = 2020;

const MongoClient = mongodb.MongoClient;
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect((err) => {
    if (err) {
        console.log(err);
    }
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    console.log("connected to database");
    client.close();
});

app.get("/", (req: Request, res: Response) => res.send("Express + TypeScript Server"));

app.use("/users", UsersRouter);

// app.listen(PORT, () => {
//     console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
// });
