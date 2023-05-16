import doctors from'../models/students.js'

import bcrypt from 'bcryptjs'
export const registerForm=(req,res)=>{
    res.render('authentication/registerstudent');
    }
export const register=async (req,res)=>{
    const {username,academicnumber,password}=req.body;
    console.log(username,academicnumber,password);
    const salt = bcrypt.genSaltSync(10);
    const encryptedpassword = bcrypt.hashSync(password, salt);
    //console.log(encryptedpassword);
    await doctors.create({username,academicnumber,password:encryptedpassword});
    res.send('registered');
  }