"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const loginLimiter_1 = __importDefault(require("../middleware/loginLimiter"));
const authController_1 = require("../controllers/authController");
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.authRouter = router;
router.route("/").post(loginLimiter_1.default, authController_1.login);
router.route("/refresh").get(authController_1.refresh);
router.route("/logout").post(authController_1.logout);
