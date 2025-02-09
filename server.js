const express = require("express");
const mongoose = require("./database");  // Connect to MongoDB
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const StudySession = require("./models/StudySession");

// ✅ Route: Get all study sessions
app.get("/sessions", async (req, res) => {
    try {
        const sessions = await StudySession.find();
        res.json(sessions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Route: Add a new study session
app.post("/sessions", async (req, res) => {
    try {
        const { title, date } = req.body;
        const newSession = new StudySession({ title, date, tasks: [] });
        await newSession.save();
        res.status(201).json(newSession);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Route: Add a task to a session
app.post("/sessions", async (req, res) => {
    try {
        console.log("Received Data:", req.body);  // Debugging log

        const { title, date } = req.body;
        const newSession = new StudySession({ title, date, tasks: [] });
        await newSession.save();

        res.status(201).json(newSession);
    } catch (err) {
        console.error("Error:", err.message);
        res.status(500).json({ error: err.message });
    }
});



// ✅ Route: Delete a session
app.delete("/sessions/:id", async (req, res) => {
    try {
        await StudySession.findByIdAndDelete(req.params.id);
        res.json({ message: "Session deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
