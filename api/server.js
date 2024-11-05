const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const connectToMongoDB = require("./db/connectToMongoDB.js");
const authRoutes = require("./routes/auth.routes.js");
const messageRoutes = require("./routes/message.routes.js");
const userRoutes = require("./routes/user.routes.js");

const app = express();
const port = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());//to parse the incoming request with JSON payload
app.use(cookieParser());//to parse the incoming request cookies


// middleware routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api", userRoutes)

app.get("/", (req, res) => {
  res.send("Hello Mery");
});

app.listen(port, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${port}`);
});
