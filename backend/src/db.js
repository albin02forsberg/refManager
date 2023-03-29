import { createPool } from "mariadb"

const pool = createPool({
    host: "database",
    port: 3306,
    user: "root",
    password: "root",
    database: "refMan",
});

pool.on("error", (err) => {
    console.error(err);
});

export { pool }