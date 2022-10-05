const otpService = require("../services/otp-service");
const hashService = require("../services/hash-service");

class AuthController {
    async sendOtp(req, res) {
        const { phone } = req.body;
        if(!phone)
            res.status(400).json({message: "Phone Field is required"});

        // getting random 4 digit otp
        const otp = await otpService.generateOtp();

        // hashing here
        const ttl = 1000 * 60 * 2;
        const expires = Date.now() + ttl;
        const data = `${phone}.${otp}.${expires}`;
        const hash = hashService.hashOtp(data);

        // sending OTP
        try {
            await otpService.sendBySms(phone, otp);
            return res.json({
                hash: `${hash}.${expires}`,
                phone,
            })
        } catch(err) {
            console.log(err);
            res.status(400).json({message: "message sending failed"})
        }
    }
    verifyOtp(req, res) {
    }
}

module.exports = new AuthController();