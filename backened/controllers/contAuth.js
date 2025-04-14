let userModel = require('../models/users');
let cartsModel = require('../models/carts')
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


// for adding carts
const addCart = async (req,res) => {
   
  try {

      const {name,price,description} = req.body;

      const imagePath = req.file ? req.file.path : '';

      // create document
      const newCart = new cartsModel ({
          name,
          price,
          image : imagePath,
          description
      })
  
      // add in mongo db
      const cart = await newCart.save();
  
      console.log('cart', cart);
      console.log('newCart', newCart);
  
      res.send({
          status : 200,
          message : 'cart added successfully',
          cart : newCart
      })

  } catch (err) {
      console.log(err);
      res.send({
          status : 400,
          message : 'Error occur in adding cart',
      })
  }

}


// for getting carts
const getCart = async (req,res) => {

  try {

      // to find all the carts
      const carts = await cartsModel.find();

      res.send({
          status : 200,
          message : 'getting carts successfully',
          carts : carts
      })

  } catch (err) {
      console.log(err);

      res.send({
          status : 400,
          message : 'Error occur in getting carts',
          
      })
  }
}

module.exports = {userContFunc,userContFunc2,addCart,getCart};  