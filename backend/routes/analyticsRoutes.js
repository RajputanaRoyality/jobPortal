const express = require("express")
const router = express.Router();
const { protect } = require("../middleware/authMiddleware.js")
const { getEmployerAnalytics } = require("../controllers/analyticsController.js")

router.get("/overview", protect, getEmployerAnalytics);

module.exports = router;