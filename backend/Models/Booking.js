import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    Address: {
      Type: String,
      required: true,
    },
    Price: {
      type: Number,
      required: true,
    },
    Date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Booking = mongoose.model("Expense", bookingSchema);
export default Booking;
