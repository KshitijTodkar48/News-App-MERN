import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;
import postRoutes from './routes/Post';

/** Connect to MongoDB */
mongoose.connect(process.env.DATABASE_URL || "", { dbName: "News-App" })
.then(() => { console.log("Database connected.");})
.catch((error) => { console.log("DB connection failed. " + error);})

/** Routes */
app.use('/', postRoutes);

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});