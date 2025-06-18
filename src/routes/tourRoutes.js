const express = require("express");
const router = express.Router();
const {tour} = require("../controllers");
const { verifyToken } = require("../middlewares/authMiddleware");

router.get("/", tour.getTours);
router.post("/", verifyToken, tour.addTour);
router.put("/:id", verifyToken, tour.updateTour);
router.delete("/:id", verifyToken, tour.deleteTour);

module.exports = router;
