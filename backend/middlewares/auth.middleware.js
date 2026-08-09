import ApiError from "../shared/utils/ApiError.js";
import { verifyToken } from "../shared/utils/verifyToken.js";

export const authenticate = async (req,res,next) => {
    try{
        const cookieName = process.env.COOKIE_NAME || "medremind_token";
        let token = req.cookies[cookieName];
        if (!token && req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
            token = req.headers.authorization.split(" ")[1];
        }
        if(!token){
            throw new ApiError(401, "Access token missing.");
        }

        const decoded = verifyToken(token);


        req.user = decoded;
        next();
    }catch(error){
        next(error);
    }
};