import Sequelize from "sequelize";

let sequelize = new Sequelize("interview-testdb", "user", "pass", {
  host: "./dev.sqlite",
  dialect: "sqlite",
});

export { sequelize, Sequelize };
