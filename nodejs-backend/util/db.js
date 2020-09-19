const mysql = require("mysql2");

const db_pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "employee_review_test",
  password: "12345678",
});

let createAdminTable = `
    CREATE TABLE IF NOT EXISTS admins( 
    id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT UNIQUE,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,

    UNIQUE(id,email)
    );
    `;

let createEmployeeTable = `
    CREATE TABLE IF NOT EXISTS employees( 
    id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT UNIQUE,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    login_key VARCHAR(255) NOT NULL,
    hire_date VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,

    UNIQUE(id,email)
    ) ;
    `;

let createPerformanceReviewTable = `
    CREATE TABLE IF NOT EXISTS performance_review(
    id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT UNIQUE,
    employee_id INT NOT NULL,
    admin_reviewer_id INT ,
    employee_reviewer_id INT ,
    adaptability TINYINT NOT NULL,
    communication TINYINT NOT NULL,
    punctuality TINYINT NOT NULL,
    quality_of_work TINYINT NOT NULL,
    comments TEXT ,  

    FOREIGN KEY (employee_id) REFERENCES employees(id),
    FOREIGN KEY (admin_reviewer_id) REFERENCES admins(id),
    FOREIGN KEY (employee_reviewer_id) REFERENCES employees(id),
    

    unique(id)
   );
    `;

createTable(createAdminTable, "admins");
createTable(createEmployeeTable, "employees");
createTable(createPerformanceReviewTable, "performance_review");

function createTable(table, tableName) {
  db_pool.execute(table, function (err, res) {
    if (err) {
      console.log("Failed to create", tableName, "\n", err.message);
    }
    if (res) {
      console.log("Created Table:", tableName, "\n", res);
    }
  });
}

let createFirstAdmin =
  "INSERT INTO admins ( firstName, lastName, password, email ) VALUES(?,?,?,?)";
db_pool.execute(
  createFirstAdmin,
  ["Dan", "Admin", "password", "dan@email.com"],
  function (err, res) {
    if (err) {
      console.log("Failed to create admin", err.message);
    }
    if (res) {
      console.log("Created first admin", res);
    }
  }
);

let createFirstEmployee =
  "INSERT INTO employees ( firstName, lastName, login_key,hire_date, email ) VALUES(?,?,?,?,?)";
db_pool.execute(
  createFirstEmployee,
  ["John", "Employee", "passkey", "22-2-2019", "john@email.com"],
  function (err, res) {
    if (err) {
      console.log("Failed to create employee", err.message);
    }
    if (res) {
      console.log("Created first employee", res);
    }
  }
);

let createFirstReview =
  "INSERT INTO performance_review ( employee_id, admin_reviewer_id, adaptability, communication, punctuality, quality_of_work, comments ) VALUES(?,?,?,?,?,?,?)";
db_pool.execute(
  createFirstReview,
  [1, 1, 3, 4, 3, 3, "Improving quickly"],
  function (err, res) {
    if (err) {
      console.log("Failed to create review", err.message);
    }
    if (res) {
      console.log("Created first review", res);
    }
  }
);

module.exports = db_pool.promise();
