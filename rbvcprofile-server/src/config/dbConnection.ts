import mongoose from "mongoose";


const dbConnector = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI_PROD);
  } catch (err) {
    console.log(err);
  }
};

export default dbConnector;

// import mongoose from "mongoose";

// const dbConnector = async () => {
//   try {
//     await mongoose.connect(process.env.DATABASE_URI);
//   } catch (err) {
//     console.log(err);
//   }
// };

// export default dbConnector;
