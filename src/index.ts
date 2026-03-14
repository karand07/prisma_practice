import express  from "express"
import userRouter from "./routes/user.routes.js";  
const app = express();
app.use(express.json());
app.use('/user',userRouter)
async function main(){    
    app.listen(3000,()=>console.log('server is runing on port 3000'))
}
main()