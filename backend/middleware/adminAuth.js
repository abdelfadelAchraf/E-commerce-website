import jwt from 'jsonwebtoken';
import 'dotenv/config'
const adminAuth = async (req , res , next)=>{
    try {
        //get the token from the request header
        const {token} = req.headers;
        if(!token){
            return res.json({success:false , message:"Not authorized , Login again"});
        }

        //verify the token
        const decoded = jwt.verify(token , process.env.JWT_SECRET);
        if(decoded !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            return res.json({success:false , message:"You are not authorized to access this route"});
        }
        //
        next();
    } catch (error) {
        console.log(error);
        return res.json({success:false , message:error.message});
    }
}
export default adminAuth ;
//This is the Auth Middleware