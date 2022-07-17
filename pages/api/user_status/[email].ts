import type { NextApiRequest, NextApiResponse } from 'next';

import { pool } from '../../../config/database';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { email },
  } = req;

  if (req.method === 'GET') {
    const query = 'SELECT userTypeSelected FROM userAccount WHERE email = $1';
    try {
      const { rows } = await pool.query(query, [email]);
      res.status(200).json(rows);
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
