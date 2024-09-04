import { compare } from "bcrypt"
import jwt from "jsonwebtoken"
import { UserModel } from "../models/userModel.js"
import { SECRET_KEY } from "../config/config.js"


export const authUser = async (req, res) => {
    const { usuario, password } = req.body

    const user = await UserModel.userLogin(usuario)
    if (user.length === 0) return res.status(400).json({ message: 'Usuario no existe' })

    const validacion = await compare(password, user[0].password)
    if (!validacion) return res.status(400).json({ message: 'Usuario o contraseña incorrecta' })

    const tokem = jwt.sign({ userId: user[0].userId }, SECRET_KEY, { expiresIn: '1h' })

    delete user[0].password
    res.json({
        tokem,
        user: user[0]
    })

}

