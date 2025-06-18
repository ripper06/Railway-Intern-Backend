const {appointmentRepository} = require('../repositories');


exports.getAppointments = async (req, res) => {
  const data = await appointmentRepository.getAll();
  res.json(data);
};

exports.addAppointment = async (req, res) => {
  const created = await appointmentRepository.createAppointment(req.body);
  res.status(201).json(created);
};

exports.updateAppointment = async (req, res) => {
  const updated = await appointmentRepository.updateAppointment(req.params.id, req.body);
  res.json(updated);
};

exports.deleteAppointment = async (req, res) => {
  await appointmentRepository.removeAppointment(req.params.id);
  res.status(204).send();
};
