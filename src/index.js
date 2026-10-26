import 'dotenv/config'
import connectDB from "./db/index.js";

connectDB();














// (async () => {
//     try {
//         mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log("Error: ",error);
//             throw error
//         })

//         app.listen(process.env.PORT , () => {
//             console.log(`App is listening on ${process.env.PORT}`);  
//         })

//     } catch (error) {
//         console.error("Error: ", error);
//     }
// })