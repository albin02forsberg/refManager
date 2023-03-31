import { pool } from "../db.js";
import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
    try {
        const conn = await pool.getConnection();

        const rows = await conn.query("SELECT * FROM Person");

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

        const rows = await conn.query("SELECT * FROM Person WHERE id = ?", [req.params.id]);

        conn.release();
        res.status(200).json(rows[0]);

    } catch (err) {
        res.status(500).json({ message: "Error" });
        console.error(err);
    }
})

router.post("/", async (req, res) => {
    console.log(req.body);
    try {
        const conn = await pool.getConnection();

        const rows = await conn.query("INSERT INTO Person (firstName, lastName, email, phone, created) VALUES (?, ?, ?, ?, ?)", [req.body.firstName, req.body.lastName, req.body.email, req.body.phone, new Date()]);

        conn.release();
        res.send(rows);

    } catch (err) {
        res.send("Error")
        console.error(err);
    }
})


export default router;