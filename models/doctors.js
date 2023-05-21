import { Schema, model } from "mongoose";

const doctors = new Schema({
   username:{
    type:String,
    required:true,
   },
   password:{
    type:String,
    required:true,
   },
   subject: {
      type: Schema.Types.ObjectId,
      required: false,
      ref: 'subject'
  },
   email:{
    type:String,
    required:true,
   },

},{ timestamps : true });

export default model('doctors', doctors);