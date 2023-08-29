const express = require("express");
const cors = require("cors");
const connectToDatabase = require("./config/database");
const GroceryModel = require('./model/product.model')

const PORT = process.env.PORT || 1336;

const app = express();
app.use(express.json())
app.use(cors());

require("dotenv").config();

connectToDatabase();

app.get("/getdata", (req, res)=>{
    GroceryModel.find()
    .then(products => res.json(products))
    .catch(err => res.json(err))
})



app.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}`);
});
