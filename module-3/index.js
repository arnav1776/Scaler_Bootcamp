const express = require("express");
const connect = require("./connectToDatabase");
const app = express();

const User = require("./schema");

app.get("/", async (req, res) => {
  const { first_name, last_name, email, number } = req.query;
  const newUser = new User({
    first_name: first_name,
    last_name: last_name,
    email_id: email,
    phone_number: number,
  });

  await newUser.save();
  return res.json(true);
 
});

app.get("/get-data", async (req, res) => {
  try {
    const userList = await User.find({});

    return res.json(userList);
  } catch (err) {
    console.error(err);
  }
});

app.listen(4300, () => {
  console.log("Server started");
  connect();
});