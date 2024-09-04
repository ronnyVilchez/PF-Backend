import { UserModel } from "../models/userModel.js";


export const usersAll = async (req, res) => {
    try {
        const users = await UserModel.userAll()
        if(users.length === 0) return res.status(400).json({message: 'No hay usuarios'})
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

export const userId = async (req, res) => {
    try {
        const {id} = req.params

        const user = await UserModel.userId(id)
        if(user.length === 0) return res.status(400).json({message: 'No existe el usuario'})
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}