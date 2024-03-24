const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/Test"); //connect and create Test db

//Create student schema 
const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    gpa: { type: Number, min: 0, max: 4 },
    department: { type: String, default: "CS&IS" }
}); 

//Create a student model 
const Student = mongoose.model("Student", studentSchema);

const app = express(); //Create route to create a student 

// Serve static files from the public dir
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false })); //parses URL-encoded data

//create route to create a student 
// this is where we are using the variables
// assumption is that we are getting information (req) 
// from the client
app.post("/create", async(req, res) => {
    const stu = new Student({
    name: req.body.name,
    gpa: req.body.gpa,
    });
 


 // Adding record using save() method 
 // and replacing call back function with await
 try {
    const result = await stu.save();
    console.log(result);
    res.send("The student with id " + result._id + "is inserted");
} catch (err) {
    console.log(err);}
});

 //Server starts listening 
 app.listen(8080, function() {
    console.log("Server is listening at port 8080");
});