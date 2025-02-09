const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/study-planner")
    .then(() => console.log("✅ Connected to Local MongoDB"))
    .catch(err => console.log("❌ MongoDB Error: ", err));

module.exports = mongoose;
