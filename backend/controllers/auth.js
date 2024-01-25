import User from "../models/userModel.js";

export const registerUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      userName,
      email,
      password
    } = req.body;

    const newUser = new User({
      firstName,
      lastName,
      userName,
      email,
      password
    });

    if (!newUser) {
      return res.status(400).json({
        message: "Client Side Error while Creating User Account"
      })
    }

    const savedUser = await newUser.save();

    return res.status(200).json({
      message: "User Created Successfully.",
      data: savedUser
    })
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error.\nError Creating User."
    })
  }
}