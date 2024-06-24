import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectToDatabase = async () => {
  try {
    const dbUri = process.env.MONGO_URI;
    if (!dbUri) {
      throw new Error('MongoDB connection string not found in environment variables.');
    }

    await mongoose.connect(dbUri);
    console.log('Connected to Database successfully!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};
export default connectToDatabase