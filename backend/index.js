import express from "express";
import bodyParser from "body-parser";
import Login from "./Routes/Login.js";
import Payment from "./Routes/Payment.js";
import Booking from "./Routes/Booking.js";
import "dotenv/config";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.get("/", (req, res) => {
  res.send("Hello Clean");
});

const port = 4000;
app.use("/", Login);
app.use("/", Booking);
app.use("/", Payment);

app.listen(port, () => {
  console.log("app is losting on port", port);
});
