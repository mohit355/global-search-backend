const Company = require("../models/company");

exports.add = (req, res) => {
  const details = new Company(req.body);
  details.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json({
      result,
    });
  });
};

exports.getList = (req, res) => {
  const query = {};
  const queryData = req.query.search;

  if (queryData) {
    query.Name = { $regex: `^${queryData}`, $options: "/m/i" };
  }

  Company.find(query, (err, company) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    console.log("====================================");
    console.log(company);
    console.log("====================================");
    res.json(company);
  });
};
