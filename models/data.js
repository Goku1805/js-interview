import { Model, DataTypes } from "sequelize";
import { sequelize } from "./setup";

class Data extends Model {
  toJSON() {
    let model = Object.assign({}, this.get());
    delete model.createdAt;
    delete model.updatedAt;
    return model;
  }
}

Data.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
    },

    randAlphabet: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "data",
  }
);
export default Data;
