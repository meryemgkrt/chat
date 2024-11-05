const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const protectRoute =async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized - No Token Provided" });
    }

    const dekoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!dekoded) {
      return res.status(401).json({ error: "Unauthorized - Invalid Token" });
    }

    const user =await User.findById(dekoded.userId).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    req.user = user
    next();
  } catch (error) {
    console.log("Error in protectRoute", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = protectRoute;
