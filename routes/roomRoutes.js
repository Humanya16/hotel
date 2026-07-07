const express = require("express");
const router = express.Router();
const Room = require("../models/Room");

// Get All Rooms
router.get("/", async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

// Add Room
router.post("/", async (req, res) => {
  try {
    const room = new Room(req.body);

    await room.save();

    res.json({
      success: true,
      message: "Room Added Successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router;