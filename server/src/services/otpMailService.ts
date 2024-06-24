import nodemailer  from "nodemailer";
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

export const generateOtp = ():string => {
    return Math.floor(1000 + Math.random() * 9000).toString();
};

export const getExpiryDate = (): Date => {
    return new Date(Date.now() + 10 * 60 * 1000);
};

export const sendOtp = (email: string, otp: string) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP code is ${otp}. It will expire in 10 Minutes.`
    };
    transporter.sendMail(mailOptions, (err:any) => {
        if (err) {
            console.error('Error sending OTP email:', err);
        } else {
            console.log('OTP sent to the Email');
        }
    });
};
export const confirmationMail = (email: string, FirstName:string,LastName:string) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Confirmation Mail',
        html: `
                   <p>Dear ${FirstName} ${LastName},</p>
                   <p>We are excited to welcome you to Our Site ExporeWorld!</p>
<p>Your registration has been successfully completed. You can now explore and enjoy all the features and benefits we offer.</p>
            `
    };
    transporter.sendMail(mailOptions, (err:any) => {
        if (err) {
            console.error('Confrimation mail is not sent to user due to technical issue:', err);
        } else {
            console.log('Confirmation Mail sent to the Email');
        }
    });
};


export const confirmationMailToAgency = (email: string, agencyName:string) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Confirmation Mail',
        html: `
                   <p>Dear ${agencyName},</p>
                   <p>We are excited to welcome you to Our Site ExporeWorld!</p>
<p>Your Registration Request has been Approved. You can now Add The TourPackeges and Offer The Best things.</p>
            `
    };
    transporter.sendMail(mailOptions, (err:any) => {
        if (err) {
            console.error('Confrimation mail is not sent to Agency due to technical issue:', err);
        } else {
            console.log('Confirmation Mail sent to the Email');
        }
    });
};