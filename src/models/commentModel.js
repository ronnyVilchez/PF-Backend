import { pool } from '../config/db.js'

export class CommentModel {
  static async commtAll () {
    const commentAll = await pool.execute('SELECT * FROM comment')
    return commentAll[0]
  }

  static async commtId (id) {
    const commentid = await pool.execute('SELECT * FROM comment WHERE id=?', [id])
    return commentid[0]
  }

  static async commtFrInc (idIn) {
    const commentfinc = await pool.execute('SELECT * FROM comment WHERE incidentId = ?', [idIn])
    return commentfinc[0]
  }
}
