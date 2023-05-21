import doctors from'../models/doctors.js'
import subject from "../models/subject.js";
import bcrypt from 'bcryptjs'
export const registerForm=async (req,res)=>{
    const subjects=await subject.find().lean();
    res.render('authentication/registerdoctor',{subjects});
    }
export const register=async (req,res)=>{
    const {username,subject,email,password}=req.body;
    console.log(username,subject,email,password);
    const salt = bcrypt.genSaltSync(10);
    const encryptedpassword = bcrypt.hashSync(password, salt);
    //console.log(encryptedpassword);
    await doctors.create({username,subject,email,password:encryptedpassword});
    res.send('registered');
  }