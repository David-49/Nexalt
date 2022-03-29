import type { NextApiRequest, NextApiResponse } from "next";
import { pool } from "../../utils/database";

// examle code
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const query = "SELECT NOW()";
    const response = await pool.query(query);
    return res.status(200).json(response.rows);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
}
