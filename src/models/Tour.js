const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  officer: {
    type: String,
    required: true
  },
  from: {
    type: Date,
    required: true
  },
  to: {
    type: Date,
    required: true
  },
  outTo: {
    type: String,
    required: true
  },
  dutyOrLeave: {
    type: String,
    enum: ['Duty', 'Leave'],
    required: true
  },
  purpose: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("Tour", tourSchema);
