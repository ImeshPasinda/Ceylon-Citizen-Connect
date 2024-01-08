const mongoose = require("mongoose");

const botLogSchema = new mongoose.Schema({
  botName: { type: String, required: true },
  status: { type: String, required: true },
  log: { type: String, required: true },
  ranDate: { type: String, required: true },
},
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("BotLog", botLogSchema);
