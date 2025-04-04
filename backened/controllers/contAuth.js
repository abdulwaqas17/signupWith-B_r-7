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

    const hashedPassword = await bcrypt.hash(password,10)

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
    res.status(500).json({message : 'error is sign up'})
   }
}

module.exports = {userContFunc};