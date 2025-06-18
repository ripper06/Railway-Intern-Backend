const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    appointmentDate: {
        type: Date,
        required: true
    },
    meetingTime: {
        type: String,
        required: true
    },
    appointmentWith: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    purpose: {
        type: String,
        required: true
    },
    venue: {
        type: String,
        required: true
    },
    isVip: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

module.exports = mongoose.model("Appointment", appointmentSchema);
