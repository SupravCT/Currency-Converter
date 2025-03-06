import express, { urlencoded } from 'express'
import cors from 'cors'
import {rateLimit} from 'express-rate-limit'
import dotenv from 'dotenv'
import convert from './Router/RateRouter.js'
dotenv.config()

const app = express()

const apiLimit=rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 100, 
    standardHeaders: true,
    legacyHeaders: false, 
})

app.use(apiLimit)
app.use(cors({origin:process.env.FRONTEND_URL}))
app.use(express.json())

app.use(urlencoded({extended:true}))   

app.use('/api/v1',convert)

export default app;
