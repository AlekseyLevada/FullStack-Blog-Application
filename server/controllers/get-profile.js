import JWT from 'jsonwebtoken';
import User from "../models/user.js";

export const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.userId)

        if(!user) {
            return res.json(
                {
                    "message": "Нет такого пользователя",
                }
            ).status(404)
        }

        const token = JWT.sign(
            {id: user_id},
            process.env.JWT_SECRET,
            {
                expiresIn: '30d',
            }
        )

        return res.json(
            {
                user,
                token,
            }
        ).status(200)
    }
    catch (err) {
        console.log(err)
        return res.json(
            {
                "message": "Нет доступа",
            }
        ).status(404)
    }
}