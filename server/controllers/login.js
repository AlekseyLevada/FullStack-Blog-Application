import User from "../models/user.js";
import bcrypt from 'bcryptjs';
import JWT from 'jsonwebtoken';

export const login = async (req, res)=> {
    try {
        const {username, password} = req.body

        const user= await User.findOne({username})
        console.log(user)

        if(!user) {
            return res.status(404).json(
                {
                    message: 'Пользователь не найден'
                }
            )
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password)

        if (!isPasswordCorrect) {
            return res.status(403).json(
                {
                    "message":"Неверный пользователь или пароль"
                }
            )
        }

        const token = JWT.sign(
        { id: user._id },
            process.env.JWT_SECRET,
            {
                expiresIn: '30d'
            }
        )

        return res.status(200).json(
            {
                user,
                token,
                "message": "Добро пожаловать",
            }
        )
    }
    catch (err) {
        console.log(err)
        return res.status(404).json(
            {
                "message": "Ошибка аутентификации"
            }
        )
    }
}