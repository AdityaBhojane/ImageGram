import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
        minLength:5,
    },
    description:{
        type:String,
        require:true,
        minLength:20,
    },
    image:{
        data:Buffer,
        type:string
    }
});

const post = mongoose.model("post",postSchema);

export default post;