let userModel = require('../models/users');
let bcrypt = require('bcryptjs');

let userContFunc = async (req,res)=> {

   try {

    const {name,email,age,password,number} = req.body;

    const exitingUser = await userModel.findOne({email}); // null or document

    if(exitingUser) { 
      return  res.status(402).json({message : 'this email is already use'})
    }

    const exitingUser2 = await userModel.findOne({number}); // null or document

    if(exitingUser2) { 
      return  res.status(402).json({message : 'this number is already use'})
    }

    const hashedPassword = await bcrypt.hash(password,10);

    const newUser = new userModel({
        name , age , email , number , password : hashedPassword
    })

    await newUser.save(); // document save hoga

    console.log(newUser);

    res.status(200).json({

        message : 'data submitted successfully',
        data : newUser

    })


   } catch (error) {
    console.log(error);
    res.status(403).json({message : 'error is sign up =', error})
   }
}

let userContFunc2 = async (req,res) => {

  const {email,password} = req.body;

  if(!email || !password) {

    return res.send({status : 404,message : 'kindly fill all the fields'})

  }


  try {

    

    let user = await userModel.findOne({email});

    console.log(user);

    if (!user) {
      return (
        res.send({
        status : 403,
        message : 'email not found'
      })
      )
    }

    let isMatch = await bcrypt.compare(password,user.password);

    if (!isMatch) {
      return (
        res.send({
        status : 403,
        message : 'wrong password'
      })
      )
    }

    res.send({
      status : 200,
      message : 'Login Successfully'
    })


    

  } catch (err) {
    console.log('error is login =', err);
    res.send({
      status : 404,
      message : 'Error is login =', err
    })
  }
  
}

module.exports = {userContFunc,userContFunc2};