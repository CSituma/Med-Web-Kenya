
const express = require('express')
const router = express.Router();
const User = require ('../../Models/user')
const bcrypt = require ('bcryptjs')



//@POST
//PRIVATE
//api/login"
router.post('/form', (req, res) => {
  console.log(req.body);

const data = req.body;
const newUser = new User(data);

  newUser.save()
  .then (()=>{
     res.json({msg: "User Saved"})
  })
.catch(err => console.log(err))

  
})

module.exports = router;