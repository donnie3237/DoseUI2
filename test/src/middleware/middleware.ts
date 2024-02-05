import { rateLimit } from 'express-rate-limit';
import morgan from 'morgan'
import fs from 'fs';
import path from 'path';
import {Request , Response , NextFunction} from 'express'

export const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
})

export function Logger(req:Request,res:Response,next:NextFunction ){
	let accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
	morgan('tiny',{ stream: accessLogStream })
}

export function checkAuth(req:Request,res:Response,next:NextFunction ){
	const auth = req.headers.accept
	if(auth){
		res.send('No auth')
	}else{
		next()
	}
}
