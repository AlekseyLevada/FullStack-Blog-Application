import User from "../models/user.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
    try {
        const {username, password} = req.body

        const isExist = await User.findOne({username})

        if(!isExist) {
            res.json({
                message: 'Такого пользователя не существует'
            })
        }

        const isPasswordCorrect = await bcrypt.compare(password, isExist.password)

        !isPasswordCorrect ? res.json({message: 'Пароли не совпадают'}) : null

        const JWT = jwt.sign(
            {id: isExist._id},
            process.env.JWT_SECRET,
            {expiresIn: '10h'}
        )
        res.json(
            {
                JWT,
                isExist,
                message: 'Добро пожаловать'
            }
        )
    }
    catch (err) {
        console.log(err)
    }
}