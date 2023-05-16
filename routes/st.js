import { Router } from "express";


import{register,registerForm} from '../controllers/students.js'


const router = new Router();

router.get('/registerstudent',registerForm);
    router.post('/registerstudent',register);


export default router; 