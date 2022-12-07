const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const CLIENT_ID = '742279253300-oe685i163e9p8clhmp3dl0rnbe0udo0t.apps.googleusercontent.com';
const CLEINT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04O8KJ60eyLEUCgYIARAAGAQSNwF-L9IrC7yX5FBeOVXL80bbYEjzFCHoXAz5tZoQq-_lmlcjFQGDlD4ZWuM9dD79QhZyPWuHYhQ';

const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLEINT_SECRET,
    REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

export const sendMail = async (Email) => {
    try {
        const accessToken = await oAuth2Client.getAccessToken();

        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'amanjaiswal0608@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLEINT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken,
            },
        });

        const mailOptions = {
            from: 'AmanJaiswal <amanjaiswal0608@gmail.com>',
            to: Email,
            subject: 'Reset Password',
            text: 'Hello from gmail email using API',
            html: '<h1>To Reset Your Password <a href="http://localhost:3000/api/v1/users/resetpassword"> Click Here </a></h1>',
        };

        const result = await transport.sendMail(mailOptions);
        return result;
    } catch (error) {
        return error;
    }
}