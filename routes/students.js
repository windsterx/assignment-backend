var express = require("express");
var router = express.Router();
var students = [
  { id: "1", name: "Namish Sawant", age: "14", class: 9, city: "Pune" },
  { id: "2", name: "Joe Root", age: "15", class: 10, city: "Pune" },
  { id: "3", name: "Alex Hales", age: "13", class: 8, city: "Pune" },
  { id: "4", name: "Aron Finch", age: "13", class: 8, city: "Pune" },
  { id: "5", name: "David Warner", age: "14", class: 9, city: "Pune" },
  { id: "6", name: "Steve Smith", age: "14", class: 9, city: "Pune" },
  { id: "7", name: "Nathon Lyon", age: "12", class: 7, city: "Pune" },
];
/* GET home page. */
router.get("/", function (req, res, next) {
  res.send({ students: students });
});
router.post("/", (request, response) => {
  const found = students.find((student) => student.id === request.body.id);
  response.status(200);
  response.send(found);
});
module.exports = router;
