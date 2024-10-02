import express from "express";
import Booking from "../Models/Booking.js";

const router = express.Router();

router.post("/booking", async (req, res) => {
  try {
    const newBooking = new Booking({
      Address: req.body.address,
      Date: req.body.date,
      Number: req.body.number,
    });

    const saveBooking = await newBooking.save();
    console.log(saveBooking);

    res.status(201).json(saveBooking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
router.get("/booking", async (req, res) => {
  try {
    const allBooking = await Booking.find();
    res.status(200).json(allBooking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
