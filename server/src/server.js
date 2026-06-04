const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const chatRoutes = require("./routes/chatRoutes");

const app = express();

const bookRoutes = require("./routes/bookRoutes");
const clubRoutes = require("./routes/clubRoutes");
app.use("/api/books", bookRoutes);
app.use("/api/clubs", clubRoutes);

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes); 

const profileRoutes = require("./routes/profileRoutes");
const advertisementRoutes = require("./routes/advertisementRoutes");
app.use("/api/profile", profileRoutes);
app.use("/api/ads", advertisementRoutes);

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/bookswap")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/chats", chatRoutes);

app.listen(5000, () => {
  console.log("Server started on port 5000");
});