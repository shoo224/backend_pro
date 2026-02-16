import dotenv from 'dotenv'
import connectdb from './db/index.js'

dotenv.config({
    path:'./.env'
})


connectdb()
.then(()=>{
    app.listen(process.env.PORT || 8000, () =>{
        console.log(`Server is running on the port :${process.env.PORT}`);
    })
})
.catch((error) =>{
    console.log("Error",err);
    throw error;
})


