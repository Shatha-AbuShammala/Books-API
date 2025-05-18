const jwt = require('jsonwebtoken');

const authenticateUser = (req,res,next) =>{
    const authheader = req.header('Authorization');
    if(!authheader || !authheader.satrtWith('Bearer')){
        res.status(401).json({message:'no token , authorization denied!'})
    }
    const token = authheader.split('')[1];
    try {
        const decode = jwt.verify(token , process.env.JWT_SECRET);
        req.user = decode;
        next();

    } catch (error) {
        res.status(400).json({message:'Invalid token, authorization denied'})
    }

} 
module.exports = authenticateUser;