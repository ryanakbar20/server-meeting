const Data = require('../models/Data');

module.exports = {
  viewDashboard: async (req, res) => {
    try {
      const data = await Data.find();
      res.render('index', { data });
    } catch (error) {
      console.log(error.message);
    }
  },
  viewTable: async (req, res) => {
    try {
      const data = await Data.find();
      console.log(data);
      res.render('table', { data });
    } catch (error) {
      console.log(error.message);
    }
  },
};
