const express = require("express");
const router = express.Router();
const {appointment} = require("../controllers");
const { verifyToken } = require("../middlewares/authMiddleware");

router.get("/", appointment.getAppointments);
router.post("/", verifyToken, appointment.addAppointment);
router.put("/:id", verifyToken, appointment.updateAppointment);
router.delete("/:id", verifyToken, appointment.deleteAppointment);

module.exports = router;
