import { pool } from "../db.js";
import { Router } from "express";

const router = Router();

router.post("/create", async (req, res) => {
    console.log(req.body);
    try {
        const conn = await pool.getConnection();

        const query = "INSERT INTO Game (teamHome, teamAway, date, created) VALUES (?, ?, ?, ?)";
        const values = [req.body.team, req.body.opponent, req.body.dateTime, new Date()];

        const rows = await conn.query(query, values);

        conn.release();
        res.send(rows);
    } catch (err) {
        res.send("Error")
        console.error(err);
    }
});

export default router;