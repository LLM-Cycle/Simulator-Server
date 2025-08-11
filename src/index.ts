import express from 'express'; 
import logger from './config/logger'; 
import requestLogger from './middlewares/ipLogger.middleware';
const app = express(); 

app.use(requestLogger); 

app.get("/health" , (req , res) => {
    logger.info("The server is working all fine and good"); 
    res.json({
        message :"Server is running OK !"
    }); 
})


app.listen(9090 , () => {
    console.log(`The server is up and is running on PORT 9090`); 
})

