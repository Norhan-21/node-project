import department from "../models/department.js";
import subject from "../models/subject.js";

export const index = async(req,res)=>{
    const subjects = await subject.find({},{ subName: 1 }).lean( );
    res.render('subjects/index', { subjects});
};

export const create = async(req,res) => {
    const departments = await department.find().lean();
    res.render('subjects/create', { departments});
};

export const store = async(req,res) => {
    const { subName , subCode , subDepartment ,subPrevious } = req.body;
    await subject.create({
        subName ,
        subCode ,
        subDepartment,
        subPrevious
    });
    
    res.redirect('/subjects');
    
};

export const show = async(req , res) => {
    const { _id } = req.params;
    const singleSubject = await subject.findById(_id).populate('subDepartment').lean();

    res.render('subjects/show', {subject: singleSubject} );
};
