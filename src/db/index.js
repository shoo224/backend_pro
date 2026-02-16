import mongoose from "mongoose";
import { db } from "../constants.js";


const connectdb = async () =>{
    try {
        const Condb = await mongoose.connect(`${process.env.MONGODB_URL}/${db}`)
        console.log(`\n connection success !! on ${Condb.connection.host}`);
        }
        
     catch (error) {
        console.log("ERROR",error)
        throw error
        
    }
}

export default connectdb