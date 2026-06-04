const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || "super_secret_key";

router.post("/register", async (req, res) => {
  try {
    const {
      username,
      firstName,
      lastName,
      phone,
      birthDate,
      gender,
      city,
      password,
    } = req.body;

    const existingUser = await User.findOne({
      username,
    });

    if (existingUser) {
      return res.status(400).json({
        message: "Username уже занят",
      });
    }

    const hashedPassword = await bcrypt.hash(
      password,
      10
    );
    const avatar =
      gender === "female"
        ? "/avatars/female.png"
        : "/avatars/male.png";
      
    const user = await User.create({
      username,
      firstName,
      lastName,
      phone,
      birthDate,
      gender,
      city,
      avatar,
      password: hashedPassword,
    });

    const token = jwt.sign(
      {
        id: user._id,
      },
      JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(201).json({
      token,
      user: {
        _id: user._id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        city: user.city,
        gender: user.gender,
        avatar: user.avatar,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;