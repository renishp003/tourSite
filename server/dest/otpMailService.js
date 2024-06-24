"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const transporter = nodemailer_1.default.createTransport({
    service: 'Gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});
exports.generateOtp = () => {
    return Math.floor(1000 + Math.random() * 9000).toString();
};
exports.getExpiryDate = () => {
    return new Date(Date.now() + 10 * 60 * 1000);
};
exports.sendOtp = (email, otp) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Your OTP Code',
        text: `Your Otp code is ${otp}. It will expire in 10 Minutes`
    };
    transporter.sendMail(mailOptions, (err) => {
        if (err) {
            console.error('Error sending OTP email:', err);
        }
        else {
            console.log('OTP email sent:');
        }
    });
};
