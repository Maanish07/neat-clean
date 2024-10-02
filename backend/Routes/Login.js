import express from "express";

const router = express.Router();

router.get("/login", async (req, res) => {
  try {
    res.send("Login page");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.post("/login", async (req, res) => {
  let number = req.body.number;
  try {
    let userNumber = await User.findOne({ number });
    if (!userNumber) {
      return;
    } else {
      const user = {
        number: userNumber.number,
      };

      const token = await genrateToken(user);
      res.cookie("token", token, {
        httpOnly: true,
      });
      res.status(200).json({ success: true, token: token });
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;
