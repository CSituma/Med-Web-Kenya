
const express = require('express')
const router = express.Router();
const Form = require ('../../Models/form')


//@POST
//PRIVATE
//api/login"
router.post('/form', (req, res) => {
  console.log(req.body);

 res.json({msg: "User Saved"})

  
})

module.exports = router;