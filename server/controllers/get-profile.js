import JWT from 'jsonwebtoken';
import User from "../models/user.js";

export const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.userId)

        if(!user) {
            return res.status(404).json(
                {
                    "message": "Нет такого пользователя",
                }
            )
        }

        const token = JWT.sign(
            {id: user_id},
            process.env.JWT_SECRET,
            {
                expiresIn: '30d',
            }
        )

        return res.status(200).json(
            {
                user,
                token,
            }
        )
    }
    catch (err) {
        console.log(err)
        return res.status(404).json(
            {
                "message": "Нет доступа",
            }
        )
    }
}