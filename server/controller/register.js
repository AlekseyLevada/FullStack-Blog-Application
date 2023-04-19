import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const isUsed = await User.findOne({ username });
    if (isUsed) {
      res.json({
        message: "Данный Username уже занят",
      });
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username: username,
      password: hash,
    });

    const token = jwt.sign(
        { id: newUser._id },
        process.env.JWT_SECRET,
        { expiresIn: '10h'}
    )

    await newUser.save();

    res.json({
      newUser,
      token,
      message: "Пользователь успешно зарегистрирован",
    });

  } catch (err) {
    res.json(
        {
          message: "Произошла ошибка при регистрации нового пользователя",
        }
    );
    console.log(err);
  }
};
