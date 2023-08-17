
const User = require('../../models/users');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

// function create(req,res) {
//     console.log("This is the Body",req.body)
//     // create user 
//     // res.json({
//     //     user: {
//     //         name: req.body.name,
//     //         email: req.body.email
//     //     }
//     // });
    
// }

const login = async (req,res) =>{
    try{
// Look into db for match
const user = await User.findOne({email: req.body.email});
if(!user) throw new Error("No user found");
// check if the password matches 
const matchPassword = await bcrypt.compare(req.body.password, user.password);
if(!matchPassword) throw new Error("Password Incorrect");
// if it does create a token and respond with it
const token = createJWT(user)
res.json(token)
    }catch(err){
        res.status(400).json("Bad Credentials")
    }
}


const create = async (req, res) =>{
    try{
      // Add the user to the database
      const user = await User.create(req.body);
      console.log(req.body);
      // token will be a string
      const token = createJWT(user);
      // Yes, we can use res.json to send back just a string
      // The client code needs to take this into consideration
      res.json(token);
    }catch(err){
        res.status(400).json(err);
    }
}

const checkToken = (req,res)=>{
  // req.user will always be there for you when a token is sent
  console.log("req.user", req.user);
  res.json(req.exp);
}



/* Helper Functions */

const createJWT = (user) =>{
return jwt.sign(
    {user},
    process.env.SECRET,
    {expiresIn: '24h'}
);
}



module.exports = {
  create,
  login: login,
  checkToken: checkToken,
};
