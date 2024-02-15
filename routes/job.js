const router = require("express").Router();
const jobController = require("../controllers/jobController");
const { verifyAndAuthorization, verifyToken, verifyAndAdmin } = require("../middleware/verifyToken");


router.post("/", verifyAndAdmin, jobController.createJob);
router.put("/:id", verifyAndAdmin, jobController.updateJob)

router.delete("/:id", verifyAndAdmin, jobController.deleteJob);
router.get("/:id", verifyAndAdmin, jobController.getJob);
router.get("/", verifyAndAdmin, jobController.getAllJobs);
router.get("/search/:key", jobController.searchJobs);

module.exports = router