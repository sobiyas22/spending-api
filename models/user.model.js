import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        default: () => uuidv4()
    },
    name: {
        type: String,
        required: true
    },
    occupation:{
        type: String,
    },
    location:{
        type: String,
    },
    
}, {
    timestamps: true
});

export default mongoose.model('User', userSchema);