
const express = require('express')
const router = express.Router();
const User = require ('../../Models/user');
const Keys = require('../../config/keys')
const bcrypt = require ('bcryptjs');




//@POST
//PRIVATE
//api/login"
router.post('/form', (req, res) => {
  console.log(req.body);


//Registering User////////
User.findOne({email:req.body.email})
.then(user => {
  if(user)
  {return res.status(400).json({email:"user already exists!"})}
  else
  {
  const data = req.body;
const newUser = new User(data);

bcrypt.genSalt(10, function(err, salt) {
  bcrypt.hash(newUser.password, salt, function(err, hash) {
      
  newUser.password = hash;
 newUser.save()
    .then (()=>{
       res.json({msg: "User Saved"})
    })
  .catch(err => console.log(err))

  });
});


   
  


  }
})






  
})


///email//
//password//













module.exports = router;