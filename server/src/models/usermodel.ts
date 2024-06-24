import mongoose from "mongoose";
import { Roles } from '../enums/rolls';
import { UserData } from "../interfaces/userInterface";



const userSchema = new mongoose.Schema<UserData>({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    },
    password: {
        type: String,
        // required: true,
        trim: true
    },
    FirstName: {
        type: String,
        trim: true,
        // required: true,
    },
    LastName: {
        type: String,
        trim: true,
        // required: true,
    },
    mobile: {
        type: Number,
        trim: true,
        // required: true,
    },
    role: {
        type: String,
        enum: Object.values(Roles),
        default: Roles.USER
    },
    otp: {
        code: {
            type: String,
            // required: true,
        },
        expires_at: {
            type: Date,
            // required: true,
        }
    }
}, {
    timestamps: true
});

const UserModel = mongoose.model<UserData>('users', userSchema);
export default UserModel;
