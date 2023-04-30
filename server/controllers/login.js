import User from "../models/user.js";
import bcrypt from 'bcryptjs';
import JWT from 'jsonwebtoken';

export const login = async (req, res)=> {
    try {
        const {username, password} = req.body

        const user= await User.findOne({username})

        if(!user) {
            return res.json(
                {
                    message: 'Пользователь не найден'
                }
            ).status(404)
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password)

        if (!isPasswordCorrect) {
            return res.json(
                {
                    "message":"Неверный пользователь или пароль"
                }
            ).status(403)
        }

        const token = JWT.sign(
        { id: user._id },
            process.env.JWT_SECRET,
            {
                expiresIn: '30d'
            }
        )

        return res.json(
            {
                user,
                token,
                "message": "Добро пожаловать",
            }
        ).status(200)
    }
    catch (err) {
        console.log(err)
        return res.json(
            {
                "message": "Ошибка аутентификации"
            }
        ).status(404)
    }
}