import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  bookingDate: {
    type: String,
    required: true,
  },
});

const Booking = mongoose.model("Booking", BookingSchema);
export default Booking;
