import mongoose from "mongoose";

const alertSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  reason: {
    type: String,
    required: true
  },

  severity: {
    type: String,
    enum: ["LOW", "MEDIUM", "HIGH"],
    required: true
  }
});

export default mongoose.model("Alert", alertSchema);
