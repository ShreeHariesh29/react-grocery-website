const mongoose = require("mongoose");


const connectToDatabase = () => {

  mongoose.connect("mongodb://127.0.0.1:27017/Grocery", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, 
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

};

module.exports = connectToDatabase; 
