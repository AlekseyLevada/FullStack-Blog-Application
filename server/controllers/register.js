import User from "../models/user.js";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const isUsed = await User.findOne({ username });

    if (isUsed) {
      return res.json(
          {
            message: "Данный Username уже занят"
          }).status(403);
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const user = new User({
      username: username,
      password: hash,
    });

    const token = JWT.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: '30d'}
    )

    await user.save();

    return res.status(200).json({
      user,
      token,
      message: "Пользователь успешно зарегистрирован",
    });

  } catch (err) {
    console.log(err);
    return res.status(404).json(
        {
          message: "Произошла ошибка при регистрации нового пользователя",
        }
    );
  }
};
