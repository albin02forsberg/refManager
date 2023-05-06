import { pool } from "../db.js";
import { Router } from "express";

const router = Router();

router.post("/create", async (req, res) => {
    console.log(req.body);
    try {
        const conn = await pool.getConnection();

        const query = "INSERT INTO Game (teamHome, teamAway, date) VALUES (?, ?, ?)";
        const values = [req.body.team, req.body.opponent, req.body.dateTime];

        const rows = await conn.query(query, values);

        conn.release();
        res.send(rows);
    } catch (err) {
        res.send("Error")
        console.error(err);
    }
});

router.get("/", async (req, res) => {
    try {
        const conn = await pool.getConnection();

        // Get all games, join with table team on teamHome to get team name

        const games = await conn.query("SELECT Game.id, Game.date, Team.name AS teamHome, Game.teamAway FROM Game JOIN Team ON Game.teamHome = Team.id");

        // Format game.date to be more readable
        games.forEach(game => {
            const date = new Date(game.date);
            const dateStr = date.toLocaleDateString("sv-SE", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
            const timeStr = date.toLocaleTimeString("sv-SE", { hour: "2-digit", minute: "2-digit" });
            game.date = dateStr + " " + timeStr;
        });


        conn.release();
        res.status(200).json(games);

    } catch (err) {
        res.status(500).json({ message: "Error" });
        console.error(err);
    }
});

export default router;