const express = require("express");
const {
    applyToJob,
    getMyApplications,
    getMyApplicantsForJob,
    getApplicationById,
    updateStatus,
} = require("../controllers/applicationController.js");

const { protect } = require("../middleware/authMiddleware.js");

const router = express.Router();

router.post("/:jobId", protect, applyToJob);
router.get("/my", protect, getMyApplications);
router.get("/job/:jobId", protect, getMyApplicantsForJob);
router.get("/:id", protect, getApplicationById);
router.put("/:id/status", protect, updateStatus);

module.exports = router;