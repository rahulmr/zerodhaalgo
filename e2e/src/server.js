//load express module                               
const express = require("express");


//call function loaded to "express" variable to get express object
const app = express();


//assign port number
app.listen(3000, () => {
    console.log("server starting on port 3000");
})