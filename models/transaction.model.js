import mongoose from "mongoose"

const transactionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    index: true
  },
  amount: {
    type: Number,
    required: true,
    min: 1
  },
  category: {
    type: String,
    enum: ["food", "travel", "shopping", "salary", "other"],
    required: true
  },
  type: {
    type: String,
    enum: ["debit", "credit"],
    required: true
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

export default mongoose.model("Transaction", transactionSchema);