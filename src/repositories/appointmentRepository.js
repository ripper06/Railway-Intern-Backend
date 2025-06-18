const { appointmentSchema } = require("../models");


const getAll = async () => {
    return await appointmentSchema.find();
};


const createAppointment = async (data) => {
    return await appointmentSchema.create(data);
};


const updateAppointment = async (id, data) => {
    return await appointmentSchema.findByIdAndUpdate(id, data, { new: true });
};


const removeAppointment = async (id) => {
    return await appointmentSchema.findByIdAndDelete(id);
};

module.exports = {
    getAll,
    createAppointment,
    updateAppointment,
    removeAppointment,
};
