const {tourSchema} = require('../models');

exports.getAll = () => tourSchema.find();
exports.create = (data) => tourSchema.create(data);
exports.update = (id, data) => tourSchema.findByIdAndUpdate(id, data, { new: true });
exports.remove = (id) => tourSchema.findByIdAndDelete(id);