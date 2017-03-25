import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import routes from "./routes/routes.js";

mongoose.connect('mongodb://localhost/news')

const app = express()
app.use(bodyParser.json())

app.use(routes)

app.use(express.static(__dirname + "/../../dist/frontend"))

const port = 3001
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
