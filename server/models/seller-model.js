const {Schema, model} = require("../config/db/conn");

const sellerSchema = new Schema({
    subType: String,
    businessId: String,
    businessName: String,
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

module.exports = sellerSchema;