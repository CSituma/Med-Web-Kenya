
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


  
})
//Registering User////////
newUser.findOne({email:req.body.email})
.then(user => {
  if(user)
  {console.log({email:"user already exists!"})}
  else
  {
    newUser.save()
    .then (()=>{
       res.json({msg: "User Saved"})
    })
  .catch(err => console.log(err))
  

bcrypt.genSalt(saltRounds, function(err, salt) {
  bcrypt.hash(req.body.Password, salt, function(err, hash) {
      
    newUser.hash.save()
  });
});

  }
}


///email//
//password//













module.exports = router;