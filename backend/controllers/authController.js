const User = require("../models/User");
const jwt = require("jsonwebtoken");

// Generate token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "60d" });
}

// @desc Register new user
exports.register = async (req, res) => {
    try {
        const { name, email, password, role, avatar } = req.body;

        // Basic validation
        if (!name || !email || !password || !role) {
            return res.status(400).json({ message: "Please fill in all required fields" });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists with this email" });
        }

        // Create user (password will be hashed by pre-save hook)
        const user = await User.create({
            name,
            email,
            password,
            role,
            avatar,
        });

        return res.status(201).json({
            message: "User registered successfully",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                avatar: user.avatar,
            },
        });
    } catch (err) {
        console.error("Register error:", err);

        // Handle duplicate email nicely
        if (err.code === 11000) {
            return res.status(400).json({ message: "Email already registered" });
        }

        return res
            .status(500)
            .json({ message: "Server error while registering", error: err.message });
    }
};

// @desc Login user
exports.login = async (req, res) => {
    // your login logic here
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
        avatar: user.avatar || '',
        companyName: user.companyName || '',
        companyDescription: user.companyDescription || '',
        companyLogo: user.companyLogo || '',
        resume: user.resume || '',
    });
};

// @desc Get logged-in user
exports.getMe = async (req, res) => {
    res.json(req.user);
};
