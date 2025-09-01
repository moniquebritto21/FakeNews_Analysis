import cors from "cors";
import express from "express";
import sql from "mssql";
import userRoutes from "../Routes/userRoute.js";

const app = express();
const port = 5000;
var pool = sql;

app.use(express.json());
app.use(cors());

app.listen(port, async () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
  initDb();
  app.use(userRoutes);
});

// Database config
const dbConfig = {
  user: "sa",
  password: "YourStrong!Passw0rd",
  server: "127.0.0.1",
  port: 1433,
  database: "master",
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

// Connect to DB
async function initDb() {
  try {
    pool = await sql.connect(dbConfig);
    console.log("Connected to MSSQL");
  } catch (err) {
    console.error("DB Connection Error:", err);
  }
}

// Register routes after middleware

export { pool };
