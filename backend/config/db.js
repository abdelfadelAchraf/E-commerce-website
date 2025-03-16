import mongoose from "mongoose";
import 'dotenv/config';

const connectDb =async ()=>{
    mongoose.connection.on("connected", () => {
        console.log("Connected to MongoDB");
    });
   await mongoose.connect(`${process.env.MONGO_DB_URL}/e-commerce`);
}

export default connectDb ;



