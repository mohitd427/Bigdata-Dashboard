const express = require("express");
const cors = require("cors")
const { connection } = require("./config/db");
const { dataRouter } = require("./routes/data.route");

require("dotenv").config();

const app = express();
app.use(cors())

app.use(express.json())

//Home Page
app.get("/", (req, res) => {
    res.send("Dashboard")
})

//Data Route
app.use("/api",dataRouter)

app.listen(process.env.PORT, async () => {
    try {
        await connection
        console.log({
          Success: `Connected To Database running on ${process.env.PORT}`,
        });
    } catch (err) {
        console.log(err)
        console.log({ Failure: "Not Connected to DB" });

    }
})