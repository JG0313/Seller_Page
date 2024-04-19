const mongoose = require("mongoose")
const {Schema, model} = require("../config/db/conn");

const tempSellerSchema = new mongoose.Schema({
    seller_picture: { type: Object, required: false },
    seller_name: { type: String, required: true },
    seller_website: { type: String, required: false },
    seller_email: { type: String, required: true, unique: true },
    seller_phoneNumber: { type: String, required: true },
    seller_address: { type: String, required: false },
    seller_zipcode: {type: String, required: true},
    seller_summary: { type: String, required: true },
    seller_partners: { type: Array, required: true},
    seller_website_visability: {type: Boolean, required: false}
});

//Seller Model
const Seller = mongoose.model("sellers", tempSellerSchema);
Seller.createIndexes();

module.exports = Seller;