const Express = require("express")
const Router = Express.Router()
const RegController= require("../Controller/Register.Controller")
Router.post("/Register", RegController)
module.exports = Router