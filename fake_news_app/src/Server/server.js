import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import pkg from "mssql";
const sql = pkg;
const app = express();
const port = 5000;
app.use(express.json());
app.use(cors());

// Database config
const dbConfig = {
  user: "sa",
  password: "P@ssword321",
  server: "localhost",
  port: 1433,
  database: "master",   // or your database name
  options: {
    encrypt: false,     // disable if not using Azure
    trustServerCertificate: true,
  },
};
let pool;
// Connect to DB
async function initDb() {
  try {
    pool = await sql.connect(dbConfig);
    console.log("✅ Connected to MSSQL");
  } catch (err) {
    console.error("❌ DB Connection Error:", err);
  }
}

app.get("/", async (req, res) => {
  try {
    const result = await pool.request().query("SELECT GETDATE() as currentTime");
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
  initDb(); // connect when server starts
});
