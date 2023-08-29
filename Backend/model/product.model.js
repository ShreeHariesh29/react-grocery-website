const mongoose = require ('mongoose')

const GrocerySchema = new mongoose.Schema({
  productbrand: String,
  productname: String,
  productprice: String,
  productimg: String,
  butone: String,
  cart: String
})

const GroceryModel = mongoose.model("products", GrocerySchema)
module.exports = GroceryModel