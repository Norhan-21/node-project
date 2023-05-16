import { Router } from "express";


import{register,registerForm} from '../controllers/doctors.js'


const router = new Router();

router.get('/registerdoctor',registerForm);
    router.post('/registerdoctor',register);


export default router; 