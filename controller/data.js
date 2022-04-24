import Data from "../models/data";
import data from "../data/data.json";
const DataController = {};

DataController.process = async (req, res) => {
  try {
    Data.destroy({
      truncate: true,
    });
    const filter = data.filter(
      (val) => val.randAlphabet === "a" || val.randAlphabet === "b"
    );
    const insert = await Data.bulkCreate(filter);
    return res.status(200).json({
      message: "Successfully inserted records.",
    });
  } catch (e) {
    return res.status(400).json({
      error: "Unable to insert data.",
    });
  }
};
DataController.fetch = async (req, res) => {
  try {
    const findAll = await Data.findAll();
    return res.status(200).json({
      data: findAll,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      error: "Unable to insert data.",
    });
  }
};

export default DataController;
