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
            "message":"Данный Username уже занят, обновите страницу и попробуйте повторно",
          }).status(403);
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const user = new User({
      username: username,
      password: hash,
    });

    await user.save();

    return res.json(
        {
          user,
          "message": "Пользователь успешно зарегистрирован",
        }).status(200);

  } catch (err) {
    console.log(err);
    return res.json(
        {
          "message": "Произошла ошибка при регистрации нового пользователя, обновите страницу и попробуйте повторно",
        }
    ).status(404);
  }
};
