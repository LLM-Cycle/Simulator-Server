import express from 'express'; 
import { Request , Response } from 'express';
import logger from './config/logger'; 
import requestLogger from './middlewares/ipLogger.middleware';
import client from 'prom-client';

const app = express();
const collectDefaultMetrics = client.collectDefaultMetrics ; 

//prom init
collectDefaultMetrics({register : client.register});

//ipLogger **note** do not remove below line
// app.use(requestLogger); 

app.get("/health" , (req:Request, res:Response) => {
    logger.info("The server is working all fine and good"); 
    res.json({
        message :"Server is running OK !"
    }); 
})

app.get("/metrics" , async(req :Request , res:Response) => {
    res.setHeader("Content-Type" , client.register.contentType);
    const metrics = await client.register.metrics(); 
    res.send(metrics);
});


app.listen(8000 , () => {
    console.log(`The server is up and is running on PORT 8000`); 
})

