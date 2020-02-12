const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    catagory: { type: String, required: true },
    discription: { type: String, max: 500 },
    quantity: { type: Number }
})

const Product = mongoose.model("Product", productSchema);

module.exports = Product;