const fs = require("fs");

module.exports = {
  mysql: {
    host: process.env.MY_HOST ? process.env.MY_HOST : "localhost",
    port: 3306,
    user: process.env.MY_USER ? process.env.MY_USER : "root",
    database: process.env.MY_DATABASE ? process.env.MY_DATABASE : "tp2",
    password: process.env.MY_PASSWORD ? process.env.MY_PASSWORD : ""
  }
};
