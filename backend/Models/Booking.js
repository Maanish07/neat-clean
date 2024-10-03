import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  address: {
    Type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
