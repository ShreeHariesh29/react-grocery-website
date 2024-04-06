const mongoose = require ('mongoose')

const GrocerySchema = new mongoose.Schema({
  productbrand: String,
  productname: String,
  productprice: String,

})

const GroceryModel = mongoose.model("fruitveg", GrocerySchema)
module.exports = GroceryModel