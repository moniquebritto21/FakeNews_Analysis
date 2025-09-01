import { pool } from "../Server/server.js";

export const getTime = async (req, res) => {
  try {
    const result = await pool
      .request()
      .query("SELECT GETDATE() as currentTime");
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
