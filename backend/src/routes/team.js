import { pool } from "../db.js";
import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
    try {
        const conn = await pool.getConnection();

        const rows = await conn.query("SELECT * FROM Team");

        conn.release();
        res.status(200).json(rows);

    } catch (err) {
        res.status(500).json({ message: "Error" });
        console.error(err);
    }
})

router.get("/:id", async (req, res) => {
    try {
        const conn = await pool.getConnection();

        const rows = await conn.query("SELECT * FROM Team WHERE id = ?", [req.params.id]);

        conn.release();
        res.status(200).json(rows[0]);

    } catch (err) {
        res.status(500).json({ message: "Error" });
        console.error(err);
    }
})

export default router;