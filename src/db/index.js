const mysql = require("mysql2");
const service = require("../service/csv-operation");

// Open the connection to MySQL server
const connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.userName,
  password: process.env.password,
});

// Run create database statement
connection.query(
  `CREATE DATABASE IF NOT EXISTS ${process.env.dbName}`,
  (err, result) => {
    if (!err) {
      sequelizeConnection(result.warningStatus);
    }
  }
);
// Establish sequlize ORM connection
const sequelizeConnection = (warningStatus) => {
  sequelize.authenticate().then(() => {
    sequelize.sync().then(() => {
      if (!warningStatus) {
        service.addTableDataFromCsv();
      }
    }).catch((error) => {
      console.error('Unable to create table : ', error);
    });
  }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
  });
}
