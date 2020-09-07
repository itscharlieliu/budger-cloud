import express from "express"

const app = express();
const PORT = 8000;

app.get('/', (req,res) => res.send('Express + TypeScript Server'));

app.get("/users", (request, response) => response.send("users"));

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});