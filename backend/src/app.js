import express from "express";
import { pool } from "./db.js";
import cors from "cors";

// Routes
import referee from "./routes/referee.js";
import game from "./routes/game.js";
import team from "./routes/team.js";

const PORT = 8080;

const app = express();

app.use(cors({
    origin: "http://localhost:3000"
}));

app.use(express.json());

app.use("/referee", referee);
app.use("/game", game);
app.use("/team", team);


app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}...`)
})