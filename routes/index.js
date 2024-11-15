var express = require('express');
var router = express.Router();
const { connectDB } = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',);
});

// router.post('/submit-form',(res,req)=>{
//   console.log(res.body)
// })

// POST route for form submission
router.post('/submit-form', async (req, res) => {
  try {
    const db = await connectDB();
    const formData = req.body;

   
    const result = await db.collection('users').insertOne(formData);
    
    console.log("Form data saved:", result);
    res.status(200).send("Form data saved successfully");
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).send("Error saving form data");
  }
});

module.exports = router;

