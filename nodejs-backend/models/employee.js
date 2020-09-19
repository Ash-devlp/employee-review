const db = require("../util/db");

module.exports = class Employee {
  constructor(firstName, lastName, loginKey, hireDate, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.loginKey = loginKey;
    this.hireDate = hireDate;
    this.email = email;
  }

  addEmployee() {
    console.log("creating employee in db");
    console.log(this.firstName, this.firstName, this.email, this.loginKey);
    return db.execute(
      "INSERT INTO employees ( firstname, lastname, login_key, hire_date, email ) VALUES(?,?,?,?,?)",
      [this.firstName, this.lastName, this.loginKey, this.hireDate, this.email]
    );
  }

  updateEmployee(id) {
    console.log("updating employee data", id);
    return db.execute(
      "UPDATE employees firstname=?, lastname=?, login_key=?, hire_date=?, email=? WHERE id=? ",
      [
        this.firstName,
        this.lastName,
        this.loginKey,
        this.hireDate,
        this.email,
        id,
      ]
    );
  }

  static removeById(id) {
    console.log("Removing employee", id);
    return db.execute("DELETE FROM employees WHERE id=?", [id]);
  }
  static viewAll() {
    console.log("fetching all employees");
    return db.execute(
      "SELECT id,firstname,lastname,email,hire_date FROM employees"
    );
  }

  static findById(id) {
    console.log("fetching user by id", email);
    return db.execute("SELECT * FROM users WHERE id = ?;", [id]);
  }
};
