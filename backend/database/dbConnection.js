import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose.connect(process.env.MONGO_URI, {
    dbName : "DINEASY"
  }).then(() =>{
    console.log("Connected to database successfully");
  }).catch((err) =>{
    console.log(`Error in connecting database ${err}`);
  })
}