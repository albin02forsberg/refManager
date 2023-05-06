import { pool } from "../db.js";
import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
    try {
        const conn = await pool.getConnection();

        const shedules = await conn.query("SELECT * FROM Schedule");

        conn.release();
        res.status(200).json(shedules);

    } catch (err) {
        res.status(500).json({ message: "Error" });
        console.error(err);
    }
})


export default router;