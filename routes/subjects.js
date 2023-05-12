import { Router } from "express";
import { create, index, show, store ,edit, update, deleteOne } from "../controllers/subject.js";


const router = new Router();

router.get('/',index);

router.get('/create',create);

router.post('/',store);


router.get('/:_id/edit',edit);
router.put('/:_id',update);
router.get('/:_id', show);
router.delete('/:_id', deleteOne);


export default router; 