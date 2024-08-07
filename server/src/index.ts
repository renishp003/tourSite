import express from 'express';
import cors from 'cors';
import routes from './routes/allRouteIndex'; 
import connectToDatabase from '../src/config/db' 

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}))

const port = process.env.PORT;

app.use('/api', routes);
connectToDatabase()
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
