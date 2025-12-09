require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes.js");
const userRoutes = require("./routes/userRoutes.js")
const jobRoutes = require("./routes/jobRoutes.js")
const applicationRoutes = require("./routes/applicationRoutes.js")
const savedJobsRoutes = require("./routes/savedJobRoutes.js")
const analyticsRoutes = require("./routes/analyticsRoutes.js")


const app = express();

// Middleware to handle CORS
app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

// Connect Database
connectDB();

// Middleware
app.use(express.json());

//Routes
app.use("/api/user", userRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/save-jobs", savedJobsRoutes);
app.use("/api/analytics", analyticsRoutes);

app.use("/api/auth", require("./routes/authRoutes"));

app.get('/', (req, res) => {
    res.send({
        activeStatus: true,
        error:false,
    })
})

// Optional: centralized error handler (if you want one)
app.use((err, req, res, next) => {
    console.error("Global error handler:", err);
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode).json({
        message: err.message || "Server error",
    });
});

//Serve uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads"), {}));

//start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));