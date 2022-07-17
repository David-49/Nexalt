import type { NextApiRequest, NextApiResponse } from 'next';

import { pool } from '../../config/database';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { userStatus, email } = req.body;
    const query =
      'UPDATE userAccount SET userTypeSelected = $1 WHERE email = $2';
    try {
      await pool.query(query, [userStatus, email]);
      res.status(200).json({ confirm: 'Ajout du status utilisateur validé' });
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
