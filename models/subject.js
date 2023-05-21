import { Schema, model } from "mongoose";

const subject = new Schema({
    subName: {
        type: String,
        required: true
    },
    subCode: {
        type: String,
        required: false
    },
    subDepartment: {
        type: Schema.Types.ObjectId,
        required: false,
        ref: 'department'
    },
    subPrevious: {
        type: String,
        required: false,
    },
  

},{ timestamps : true });

export default model('subject', subject);