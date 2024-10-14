const teacherCtrl = (req, res) => {
  res.status(200).json({
    message: "Teacher route hit",
    data: req.body, // request body data
  });
};

module.exports = teacherCtrl;
