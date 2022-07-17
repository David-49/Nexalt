import type { NextApiRequest, NextApiResponse } from 'next';

import { pool } from '../../config/database';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { firstname, lastname, email } = req.body;
    const now = new Date();
    const query =
      'INSERT INTO userAccount (firstName, lastName, email, createdAt) VALUES ($1, $2, $3, $4)';
    const { rows } = await pool.query(
      'SELECT * FROM userAccount WHERE email = $1',
      [email]
    );

    if (rows.length === 0) {
      try {
        await pool.query(query, [firstname, lastname, email, now]);
        res.status(200).json({ confirm: 'Ajout utilisateur validé' });
      } catch (error: any) {
        throw new Error(error);
      }
    } else {
      res.status(200).json({ message: "L'utilisateur existe déjà" });
    }
  }
}
