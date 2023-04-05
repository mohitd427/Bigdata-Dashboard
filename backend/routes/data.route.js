const express = require('express');
const { DataModel } = require('../models/data.model');

const dataRouter = express.Router();

dataRouter.get("/", async (req, res) => {
    const query = req.query;   
    try {
        const datas = await DataModel.find(query);
        console.log(datas)
         res.json(datas)
    } catch (err) {
        console.log(err)
        res.json({err:'Oops Something went Wrong while fetching data'})
    }
})

module.exports = {
    dataRouter
}

