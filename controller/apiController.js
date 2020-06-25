const Data = require('../models/Data');

module.exports = {
  postData: async (req, res) => {
    try {
      const { title, location, date, participant, note } = req.body;

      if (!req.file) {
        res.status(600).json('IMAGE NOT FOUND');
      }

      if (
        title === undefined ||
        location === undefined ||
        date === undefined ||
        participant === undefined
      ) {
        res.status(400).json('Lengkapi Semua Field');
      }

      const newData = {
        title: title,
        location: location,
        date: date,
        participant: participant,
        note: note,
        imageUrl: `images/${req.file.filename}`,
      };

      const addData = await Data.create(newData);

      res.status(200).json({ newData });
    } catch (error) {
      console.log(error.message);
      res.status(500).json(`Error Internal Server ${error.message}`);
    }
  },
  getData: async (req, res) => {
    try {
      const data = await Data.find();
      res.status(200).json(data);
    } catch (error) {
      console.log(error.message);
      res.status(500).json(`Error Internal Server ${error.message}`);
    }
  },
};
