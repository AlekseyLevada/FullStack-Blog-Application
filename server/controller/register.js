import User from "../models/user.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  try {
    const { username, password } = req.body;

    const isUsed = await User.findOne({ username });

    if (isUsed) {
      res.json({
        message: "Данный username уже используется",
      });
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hash,
    });

    await newUser.save();

    res.json({
      newUser,
      message: "Пользователь успешно зарегистрирован",
    });
  } catch (err) {
    res.json({
      message: "Произошла ошибка при регистрации нового пользователя",
    });
    console.log(err);
  }
};
