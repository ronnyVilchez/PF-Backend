import { pool } from '../config/db.js'

export class UserModel {
  static async userAll () {
    const userAll = await pool.execute('SELECT * FROM users')
    return userAll[0]
  }

  static async userId (id) {
    const userAll = await pool.execute('SELECT * FROM users WHERE userId=?', [id])
    return userAll[0]
  }

  static async userCreat ({ nombre, apellido, dni, telefono, rol, email, usuario, passEncrip }) {
    const userAll = await pool.execute('INSERT INTO users (nombre, apellido, dni, telefono, rol, email,usuario,password) VALUES (?,?,?,?,?,?,?,?) ', [nombre, apellido, dni, telefono, rol, email, usuario, passEncrip])
    return userAll[0]
  }

  static async userUpdt ({ nombre, apellido, dni, telefono, rol, email, usuario, passEncrip, id }) {
    const sql = []
    const values = []

    if (nombre) {
      sql.push('nombre=?')
      values.push(nombre)
    }
    if (apellido) {
      sql.push('apellido=?')
      values.push(apellido)
    }
    if (dni) {
      sql.push('dni=?')
      values.push(dni)
    }
    if (telefono) {
      sql.push('telefono=?')
      values.push(telefono)
    }
    if (rol) {
      sql.push('rol=?')
      values.push(rol)
    }
    if (email) {
      sql.push('email=?')
      values.push(email)
    }
    if (usuario) {
      sql.push('usuario=?')
      values.push(usuario)
    }
    if (passEncrip) {
      sql.push('password=?')
      values.push(passEncrip)
    }
    if (id) {
      values.push(id)
    }

    const stsql = sql.join(',')

    const userUp = await pool.execute(`UPDATE users SET ${stsql} WHERE userId = ?`, values)
    return userUp[0]
  }

  static async userDel (id) {
    const userDl = await pool.execute('DELETE FROM users WHERE userId= ?', [id])
    return userDl[0]
  }

  static async userLogin (usuario) {
    const userDl = await pool.execute('SELECT * FROM users WHERE usuario= ?', [usuario])
    return userDl[0]
  }
}
