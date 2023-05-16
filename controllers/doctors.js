import doctors from'../models/doctors.js'

import bcrypt from 'bcryptjs'
export const registerForm=(req,res)=>{
    res.render('authentication/registerdoctor');
    }
export const register=async (req,res)=>{
    const {username,email,password}=req.body;
    console.log(username,email,password);
    const salt = bcrypt.genSaltSync(10);
    const encryptedpassword = bcrypt.hashSync(password, salt);
    //console.log(encryptedpassword);
    await doctors.create({username,email,password:encryptedpassword});
    res.send('registered');
  }