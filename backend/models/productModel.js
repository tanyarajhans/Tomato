const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CategorySchema = new Schema({
  name: String
});

const ProductSchema = new Schema({
    name: String,
    description: String,
    price: String,
    category: String
});

module.exports=mongoose.model("Product", ProductSchema);