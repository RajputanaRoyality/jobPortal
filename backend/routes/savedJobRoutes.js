const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware.js")
const {
    saveJob,
    unsaveJob,
    getMySavedJobs,
} = require("../controllers/savedJobControlller.js")

router.post("/:jobId", protect, saveJob);
router.delete("/:jobId", protect, unsaveJob);
router.get("/my", protect, getMySavedJobs);

module.exports = router;