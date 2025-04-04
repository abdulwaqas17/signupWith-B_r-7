let userMdFunc = (req,res,next)=> {

    const {name,email,age,password,number} = req.body;

    if(!name || !email || !age || !password || !number) {
        return res.status(404).json({message : 'Kindly fill all the details'});
    }

    if(age < 15) {
        return res.status(403).json({message : 'you are under age'});
    }

    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if(!regex.test(email)) {
        return res.status(402).json({message : 'invalid email'});
    }

    const regex2 = /^(?:\+92|0)[3-9][0-9]{9}$/;

    if(!regex2.test(number)) {
        return res.status(403).json({message : 'invalid phone number'});
    }

    next();

}

module.exports = {userMdFunc};