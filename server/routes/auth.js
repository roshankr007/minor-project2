const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const User = require("../models/User");

// Config for multer for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/"); // Store uploaded file in the "uploads" folder
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original filename
  },
});

const upload = multer({ storage });

/* USER REGISTER */
router.post("/register", upload.single("profileImage"), async (req, res) => {
  try {
    /* Take all the information from the form */
    const { firstName, lastName, email, password } = req.body;

    // The uploaded file is available as req.file
    const profileImage = req.file;

    // If they did not upload a profile image:
    if (!profileImage) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Path to the uploaded profile photo
    const profileImagePath = profileImage.path;

    // Check if user exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      profileImage: profileImagePath,
    });

    // Save the new user
    await newUser.save();

    // Send a successful message
    res.status(200).json({ message: "User registered successfully!" , user: newUser });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Registration failed", error: err.message });
  }
});

/* USER LOGIN */
router.post("/login", async (req, res) => {
  try {
    /* Take the information from the form */
    const { email, password } = req.body;

    /* Check if user exists */
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    /* Compare the password with the hashed password */
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    /* Generate JWT token */
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    // Remove sensitive information before sending the response
    const { password: userPassword, ...userData } = user._doc;

    res.status(200).json({ token, user: userData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Login failed", error: err.message });
  }
});

module.exports = router;
