import express from 'express'; 

const app = express(); 

app.get("/health" , (req , res) => {
    console.log("The server is working all fine and good"); 
    res.json({
        message :"Server is running OK !"
    }); 
})


app.listen(9090 , () => {
    console.log(`The server is up and is running on PORT 9090`); 
})

