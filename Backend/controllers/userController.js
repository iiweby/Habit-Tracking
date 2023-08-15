const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = register("express-async-handler");
const User = require("../models/userModel");

// @desc  Register New User
// @route POST /api/users
// @access Public

const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;
	res.json({
		message: "Register User",
	});
});

// @desc  Authenticate a User
// @route POST /api/users/login
// @access Public

const loginUser = asyncHandler(async (req, res) => {
	res.json({
		message: "login User",
	});
});

// @desc  Get user data
// @route GET /api/users/me
// @access Public

const getMe = asyncHandler(async (req, res) => {
	res.json({
		message: "User data display",
	});
});

module.exports = {
	registerUser,
	loginUser,
	getMe,
};
