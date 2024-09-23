const Express = require("express");
const DataBase = require("./Config/Connection");
require("dotenv").config();
const Router = require("./Route/Register.Route");

const App = Express();
DataBase();
App.use(Express.json());

App.use(Router);
let Data = {
  Name: "Sam",
  Age: 21,
};

App.get("/Data", (req, res) => {
  res.json(Data);
});

App.use("/", (req, res) => {
  res.json("Server is Live");
});

const Port = 8002;

App.listen(Port, () => {
  console.log("Server is Alive...", Port);
});
