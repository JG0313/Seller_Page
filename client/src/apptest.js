const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/Test"); //connect and create Test db

//Create seller schema 
const sellerSchema = new mongoose.Schema({
  seller_picture: { type: String, required: true },
  seller_name: { type: String, required: true },
  seller_website: { type: String, required: true },
  seller_email: { type: String, required: true },
  seller_phoneNumber: { type: Number, required: true },
  seller_address: { type: String, required: true },
  seller_summary: { type: String, required: true },
  userType: { type: String, default: "Seller" }
}); 

//Create a seller model 
const Seller = mongoose.model("Seller", sellerSchema);

const app = express(); //Create route to create a seller 

// Serve static files from the public dir
app.use(express.static("pages")); //ANNA CHANGE
app.use(express.urlencoded({ extended: false })); //parses URL-encoded data

//create route to create a seller 
// this is where we are using the variables
// assumption is that we are getting information (req) 
// from the client
app.post("/create", async(req, res) => {
    const sel = new Seller({
    seller_picture: req.body.seller_picture,
    seller_name: req.body.seller_name,
    seller_website: req.body.seller_website,
    seller_email: req.body.seller_email,
    seller_phoneNumber: req.body.seller_phoneNumber,
    seller_address: req.body.seller_address,
    seller_summary: req.body.seller_summary
    });
 
 // Adding record using save() method 
 // and replacing call back function with await
 try {
    const result = await sel.save();
    console.log(result);
    res.send("The seller with id " + result._id + "is inserted");
} catch (err) {
    console.log(err);}
});

 //Server starts listening 
 app.listen(8080, function() {
    console.log("Server is listening at port 8080");
});