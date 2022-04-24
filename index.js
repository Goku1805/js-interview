import { sequelize } from "./models/setup.js";
import config from "./config/index.js";
import app from "./app";
sequelize.sync().then(() => console.log("db is ready..."));

app.listen(config.PORT, function () {
  console.log(`listening on port ${config.PORT}`);
});
