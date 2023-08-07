"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.refresh = exports.login = void 0;
const User_1 = __importDefault(require("../models/User"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// @access Public // @route POST /auth // @desc Login
const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Missing email or password" });
    }
    const foundUser = await User_1.default.findOne({ email }).exec();
    if (!foundUser || !foundUser.active) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const match = await bcrypt_1.default.compare(password, foundUser.password);
    if (!match)
        return res.status(401).json({ message: "Unauthorized" });
    const accessToken = jsonwebtoken_1.default.sign({
        UserInfo: {
            username: foundUser.email,
            roles: foundUser.roles,
        },
    }, process.env.ACCESS_TOKEN_SECRET, 
    // { expiresIn: "15m" }
    { expiresIn: "1m" });
    const refreshToken = jsonwebtoken_1.default.sign({ username: foundUser.email }, process.env.REFRESH_TOKEN_SECRET, 
    // { expiresIn: "7d" }
    { expiresIn: "1d" });
    // Create secure cookie with refresh token
    res.cookie("jwt", refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "None",
        maxAge: 7 * 24 * 60 * 60 * 1000, //cookie expiry: set to match rT
    });
    // Send accessToken containing username and roles
    res.json({ accessToken });
};
exports.login = login;
// @access Public - because access token has expired // @route GET /auth/refresh // @desc Refresh
const refresh = (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt)
        return res.status(401).json({ message: "Unauthorized" });
    const refreshToken = cookies.jwt;
    jsonwebtoken_1.default.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, async (err, decoded) => {
        if (err)
            return res.status(403).json({ message: "Forbidden" });
        const foundUser = await User_1.default.findOne({
            email: decoded.email,
        }).exec();
        if (!foundUser)
            return res.status(401).json({ message: "Unauthorized" });
        const accessToken = jsonwebtoken_1.default.sign({
            UserInfo: {
                email: foundUser.email,
                roles: foundUser.roles,
            },
        }, process.env.ACCESS_TOKEN_SECRET, 
        // { expiresIn: "15m" }
        { expiresIn: "1m" });
        res.json({ accessToken });
    });
};
exports.refresh = refresh;
// @access Public - just to clear cookie if exists // @route POST /auth/logout // @desc Logout
const logout = (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt)
        return res.sendStatus(204); //No content
    res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
    res.json({ message: "Cookie cleared" });
};
exports.logout = logout;
