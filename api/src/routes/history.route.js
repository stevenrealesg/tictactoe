const Router = require("express").Router;
const route = Router();
const { getHistory, createHistory } = require('../controllers/history.controller')

route.get('/', getHistory)
route.post('/create', createHistory)

module.exports = route