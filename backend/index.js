const express = require("express");
const cors = require("cors")
const { connection } = require("./config/db");
const { dataRouter } = require("./routes/data.route");

require("dotenv").config();

const app = express();
app.use(cors())

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Dashboard")
})

app.use("/datas",dataRouter)

app.listen(process.env.port, async () => {
    try {
        await connection
        console.log({Success:'Connected To Database'})
    } catch (err) {
        console.log(err)
        console.log({ Failure: "Not Connected to DB" });

    }
})