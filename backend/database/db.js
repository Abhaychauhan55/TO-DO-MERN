import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {
     const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.g03r4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

    mongoose.connection.on('connected', () =>{
        console.log('Datase Connected');
    })

    mongoose.connection.on('disconnected', () =>{
        console.log('Datase disconnected');
    })
    mongoose.connection.on('error', () =>{
        console.log('error while connecting with database', error.message);
    })
}

export default Connection;