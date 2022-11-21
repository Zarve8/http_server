import Express from 'express';
import cors from 'cors';
import router from './routes';
const app = Express();


app.use(cors());
app.use(Express.json());
app.use('/api', router);
const PORT = 7000;


const start = async () => {
    try{
        app.listen(PORT, () => console.log("Server started on:", PORT));
    }
    catch (e){
        console.log(e);
    }
}

start();