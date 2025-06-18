const {tourRepository} = require("../repositories");

exports.getTours = async (req, res) => {
  const data = await tourRepository.getAll();
  res.json(data);
};

exports.addTour = async (req, res) => {
  const created = await tourRepository.create(req.body);
  res.status(201).json(created);
};

exports.updateTour = async (req, res) => {
  const updated = await tourRepository.update(req.params.id, req.body);
  res.json(updated);
};

exports.deleteTour = async (req, res) => {
  await tourRepository.remove(req.params.id);
  res.status(204).send();
};
