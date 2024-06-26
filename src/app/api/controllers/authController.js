import expressAsyncHandler from "express-async-handler";
import user from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signIn = expressAsyncHandler(async (req, res) => {
  try {
    let { email, password } = req.body;
      const finduser = await user.findOne({email})
        if(email && (await bcrypt.compare(password,finduser.password))){
          const token = jwt.sign({ objectId:finduser._id }, process.env.SECRET_key);
          res.cookie("token", token, { httpOnly: true, secure: true });
          res.json({
            status: "200",
            message: "Signin successful",
            data: finduser,
            token,
          });
        }else{
          res.json({
            status: 400,
            message: "fail",
          });
        }
  } catch (err) {
    res.status(500).send("Error:" + err.message);
  }
});

export const signUp = expressAsyncHandler(async (req, res) => {
  try {
    let { name, email, password, dateOfBirth } = req.body;
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password === "" ||
      dateOfBirth === ""
    ) {
      res.json({ status: "FAILED", message: "Empty input field!" });
    } else if (!/^[a-zA-Z ]*$/.test(name)) {
      res.json({ status: "FAILED", message: "Invalid name entered" });
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      res.json({ status: "FAILED", message: "Invalid email entered" });
    } else if (!new Date(dateOfBirth).getTime()) {
      res.json({ status: "FAILED", message: "Invalid date of birth entered" });
    } else if (password.length < 6) {
      res.json({ status: "FAILED", message: "Password is too short" });
    } else {
      user
        .find({ email })
        .then((result) => {
          if (result.length) {
            res.json({
              status: "FAILED",
              message: "user with the provided email already exists",
            });
          } else {
            const saltRounds = 10;
            bcrypt
              .hash(password, saltRounds)
              .then((hashedPassword) => {
                const newUser = new user({
                  name,
                  email,
                  password: hashedPassword,
                  dateOfBirth,
                });
                newUser
                  .save()
                  .then((result) => {
                    res.json({
                      status: "SUCCESS",
                      message: "Signup successful",
                      data: result,
                    });
                  })
                  .catch((err) => {
                    res.json({
                      status: "FAILED",
                      message:
                        "An error occurred while saving user account" + err,
                    });
                  });
              })
              .catch((err) => {
                res.json({
                  status: "FAILED",
                  message: "An error occurred while hasing password!",
                });
              });
          }
        })
        .catch((err) =>
          res.json({
            status: "FAILED",
            message:
              "An error occureed while checking for existing user!" + err,
          })
        );
    }
  } catch (err) {
    res.status(500).send("Error:" + err.message);
  }
});
