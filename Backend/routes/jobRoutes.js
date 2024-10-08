const express = require("express");
const router = express.Router();
const { postJob, updateJobStatus } = require("../controllers/jobController");
const Job = require("../models/Job");

// POST endpoint for job posting
router.post("/jobposting", postJob);

router.get("/jobpostings", async (req, res) => {
  try {
    const jobs = await Job.find({});
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching jobs", error: error });
  }
});

router.put("/:id/approve", updateJobStatus);

module.exports = router;
