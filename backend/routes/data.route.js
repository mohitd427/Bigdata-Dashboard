const express = require("express");
const { DataModel } = require("../models/data.model");
const jsonData = require("../config/jsondata.json");

const dataRouter = express.Router();

dataRouter.get("/data", async (req, res) => {
  // const query = req.query;    
  try {
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 5;
    const search = req.query.search || "";
    // let sort = req.query.sort || "";

    // req.query.sort ? sort.query.split(",") : (sort = [sort]);

    // let sortBy = {};
    // if (sort[1]) sortBy[sort[0]] = sort[1];
    // else sortBy[sort[0]] = "asc";

    const data = await DataModel.find({
      // name: { $regex: search },
    })
      // .sort(sortBy)
      .skip(page * limit)
      .limit(limit);

    const total = await DataModel.countDocuments();

    const response = {
      error: false,
      total,
      page: page + 1,
      limit,
      data,
    };
    // console.log(data)
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
});

// const insertJsonData = async () => {
//   try {
//     const docs = await jsonData.inserMany(datas);
//     return Promise.resolve(docs)
//   } catch (err) {
//     return Promise.reject(err)
//   }
// }

// insertJsonData().then((docs)=>console.log(docs)).catch(err=>console.log(err))

module.exports = {
  dataRouter,
};
