import express, { Express, Request, Response } from 'express';

const PORT = 8000;

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Hello Rimsan");
});

app.listen(PORT, () => {
    console.table({ PORT, DESCRIPTION: "Server UP" });
});