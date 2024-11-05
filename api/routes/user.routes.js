const express = require("express");
const { getUsersForSidebar } = require("../controllers/user.controllers.js");

const protectRoute = require("../middleware/protectRoute");
const router = express.Router();

// Eğer /api/users şeklinde kullanmak istiyorsanız
router.get("/users", protectRoute, getUsersForSidebar);

module.exports = router;
