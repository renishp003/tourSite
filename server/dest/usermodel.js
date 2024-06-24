"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const rolls_1 = require("../src/enums/rolls");
const userSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    FirstName: {
        type: String,
        trim: true,
        required: true,
    },
    LastName: {
        type: String,
        trim: true,
        required: true,
    },
    mobile: {
        type: String,
        trim: true,
        required: true,
    },
    role: {
        type: String,
        enum: Object.values(rolls_1.Roles),
        default: rolls_1.Roles.USER
    },
    otp: {
        code: {
            type: String,
            required: true,
        },
        expires_at: {
            type: Date,
            required: true,
        }
    }
}, {
    timestamps: true
});
const UserModel = mongoose_1.default.model('users', userSchema);
exports.default = UserModel;
