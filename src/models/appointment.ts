import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    contactNumber: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },

    status: {
      type: String,
      default: "Scheduled",
      enum: ["Scheduled", "Visited", "Waiting"],
    },
  },
  {
    timestamps: true,
  }
);


export default mongoose.models.Appointment ||
  mongoose.model("Appointment", AppointmentSchema);
