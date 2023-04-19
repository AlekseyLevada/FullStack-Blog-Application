import User from "../models/user.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const login = async (req, res)=> {
    try {
        const {username, password} = req.body

        const user= await User.findOne({username})

        if(!user) {
            res.json(
                {
                    message: 'Такого Username не существует'
                }
            )
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password)

        if (!isPasswordCorrect) {
            res.json(
                {
                    "message":"Неверный пароль"
                }
            )
        }

        const token = jwt.sign(
        { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '10h'}
        )

        res.json(
            {
                token,
                user,
                "message": "Добро пожаловать",
            }
        )
    }
    catch (err) {
        res.json(
            {
                "message": "Ошибка аутентификации"
            }
        )
        console.log(err)
    }
}