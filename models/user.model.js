const mongoose = require("mongoose");

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
    balance:{
        type: Number,
        required: true,
        min: 0
    },
    monthlyLimit: {
        type: Number,
        required: true,
        min: 0
    }
}, {
    timestamps: true
});

export default mongoose.model('User', userSchema);