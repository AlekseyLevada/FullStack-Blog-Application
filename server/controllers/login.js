import User from "../models/user.js";
import bcrypt from 'bcryptjs';
import JWT from 'jsonwebtoken';

export const login = async (req, res)=> {
    try {
        const {username, password} = req.body
        const user= await User.findOne({ username })
        const isPasswordCorrect = await bcrypt.compareSync(password, user.password)

        if(!user || !isPasswordCorrect) {
            return res.json(
                {
                    "message": "Неверный логин или пароль, обновите страницу и попробуйте повторно"
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
                "message": "Добро пожаловать, вы вошли в систему"
            }
        ).status(200)
    }
    catch (err) {
        console.log(err)
        return res.json(
            {
                "message": "Ошибка аутентификации, обновите страницу и попробуйте повторно"
            }
        ).status(404)
    }
}