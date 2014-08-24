exports.apis = function (req, res) {
  res.render('apis/' + req.params.name);
};
