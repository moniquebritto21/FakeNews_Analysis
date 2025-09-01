import sql from "mssql";

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

let pool = null;

export async function getPool() {
  try {
    if (!pool) {
      pool = await sql.connect(dbConfig);
      console.log("✅ Connected to MSSQL");
    }
    return pool;
  } catch (error) {
    console.error("❌ MSSQL Connection Error:", error.message);
    throw error; // rethrow so caller knows connection failed
  }
}
