import { Roles } from "../enums/rolls";

export interface UserData {
    id: any;
    FirstName: string;
    LastName: string;
    email: string;
    password: string;
    mobile: number;
    role: Roles;
    otp: {
        code: string;
        expires_at: Date;
    };
}

