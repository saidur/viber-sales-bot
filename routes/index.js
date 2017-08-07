console.log ('route call .. ');
const routes = require('express').Router();

routes.get('/index', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});


module.exports = routes;