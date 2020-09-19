var express = require("express");
const Employee = require("../models/employee");
var router = express.Router();
var employee = require("../models/employee");

router.get("/", function (req, res, next) {
  console.log("get all employees");
  employee
    .viewAll()
    .then((result) => {
      console.log("getting all employees", result[0]);
      res
        .status(201)
        .json({ message: "employee data recieved", obj: result[0] });
    })
    .catch((err) => {
      console.log("get all employee err", JSON.stringify(err));
      return res.status(500).json({ title: "An error occured", error: err });
    });
});

router.post("/", function (req, res, next) {
  const firstName = req.body.firstname;
  const lastName = req.body.lastname;
  const loginKey = req.body.loginkey;
  const hireDate = req.body.hiredate;
  const email = req.body.email;

  const employee = new Employee(firstName, lastName, loginKey, hireDate, email);

  employee
    .addEmployee()
    .then((result) => {
      console.log("adding employee", result);
      res.status(201).json({ message: "employee data recieved", obj: result });
    })
    .catch((err) => {
      console.log("adding err", JSON.stringify(err));
      return res.status(500).json({ title: "An error occured", error: err });
    });
});

router.put("/:id", function (req, res, next) {
  console.log("creating employee", req.body);
  console.log(
    req.body.firstname,
    req.body.lastname,
    req.body.loginkey,
    req.body.hiredate,
    req.body.email
  );
  const firstName = req.body.firstname;
  const lastName = req.body.lastname;
  const loginKey = req.body.loginkey;
  const hireDate = req.body.hiredate;
  const email = req.body.email;

  const employee = new Employee(firstName, lastName, loginKey, hireDate, email);

  employee
    .updateEmployee()
    .then((result) => {
      console.log("updating employee by id", result);
      res.status(201).json({ message: "employee data recieved", obj: result });
    })
    .catch((err) => {
      console.log("updating err", JSON.stringify(err));
      return res.status(500).json({ title: "An error occured", error: err });
    });
});

router.delete("/:id", function (req, res, next) {
  employee
    .removeById(req.params.id)
    .then((result) => {
      console.log("delete employee by id", result);
      res.status(201).json({ message: "employee data recieved", obj: result });
    })
    .catch((err) => {
      console.log("deleting err", JSON.stringify(err));
      return res.status(500).json({ title: "An error occured", error: err });
    });
});
router.get("/id", function (req, res, next) {
  employee.findById(id).then().catch();
});

module.exports = router;
