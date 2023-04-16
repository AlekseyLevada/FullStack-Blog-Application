import jwt from 'jsonwebtoken';
import User from "../models/user.js";

export const myProfile = async (req, res) => {
    try {
        const user = await User.findById(req.userId)

        if(!user) {
            res.json(
                {
                    "message": "Нет такого пользователя",
                }
            )
        }

        const token = jwt.sign(
            {
                id: user_id,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '10h',
            }
        )
        res.json(
            {
                user,
                token,
            }
        )
    }
    catch (err) {
        res.json(
            {
                "message": "Нет доступа",
            }
        )
    }
}