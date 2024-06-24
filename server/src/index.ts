import express from 'express';
import cors from 'cors';
import routes from './routes/allRouteIndex'; 
import connectToDatabase from '../src/config/db' 

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.use('/api', routes);
connectToDatabase()
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
