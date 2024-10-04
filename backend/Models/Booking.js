import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Booking = mongoose.model("Booking", BookingSchema);
export default Booking;
