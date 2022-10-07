const otpService = require("../services/otp-service");
const hashService = require("../services/hash-service");
const userService = require("../services/user-service");
const tokenService = require("../services/token-service");

class AuthController {
    async sendOtp(req, res) {
        const { phone } = req.body;
        // const phone = 951754874;
        if(!phone)
            return res.status(400).json({message: "Phone Field is required"});

        // getting random 4 digit otp
        const otp = await otpService.generateOtp();

        // hashing here
        const ttl = 1000 * 60 * 2;
        const expires = Date.now() + ttl;
        const data = `${phone}.${otp}.${expires}`;
        const hash = hashService.hashOtp(data);

        // sending OTP
        try {
            // await otpService.sendBySms(phone, otp);
            return res.json({
                hash: `${hash}.${expires}`,
                phone,
                otp
            })
        } catch(err) {
            console.log(err);
            return res.status(400).json({message: "message sending failed"})
        }
    }
    async verifyOtp(req, res) {
        const {otp, hash, phone} = req.body;
        // checking if any of the fields are not present, set an error 400
        if(!otp || !hash || !phone)
            res.status(400).json({message: "All fields are required"})

        const [hashedOtp, expires] = hash.split('.');
        // checking if the time has been expired or not
        if(Date.now() > +expires) 
            res.status(400).json({message: "OTP Expired!"});

            
        // this data is the new one
        const data = `${phone}.${otp}.${expires}`;
        const isValid = otpService.verifyOtp(hashedOtp, data);
        if(!isValid)
            res.status(400).json({message: "Invalid OTP"});
        

        // checking if the user is present in DB or not
        // If YES do nothing, Else create User
        let user ;
        try {
            user = await userService.findUser({phone });
            if(!user)
                user = await userService.createUser({ phone });
        } catch(err) {
            console.log(err);
            res.status(400).json({message: "DB Error !"});
        }


        const {accessToken, refreshToken} = tokenService.generateTokens({ _id: user._id, activated: false });
        res.cookie('refreshtoken', refreshToken, {
            maxAge: 1000 * 60 * 60 * 24 * 30,
            httpOnly: true
        })
        res.json({accessToken})
    }
}

module.exports = new AuthController();

