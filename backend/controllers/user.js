import User from "../models/userModel.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    if (!users) {
      return res.status(400).json({
        message: "No Users Available"
      })
    }

    return res.status(200).json({
      message: "All Users.",
      data: users
    })
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error.\nCannot Send Users' Data"
    })
  }
}