const express = require('express');
const { type } = require('os');

let app = express();

async function sum(number1, number2){
    try {
        if(typeof number1 === 'number' && typeof number2 === 'number'){
            return number1+number2;
        }else{
            throw new Error("Invalid input");
        }
    } catch (error) {
        throw error;
    }
}

app.get("/", async(req, res) =>{
    try {
        let value = await sum(1, 1);
        console.log("value", value)
        res.send(`${value}`).sendStatus(200);
    } catch (error) {
        res.send(error.message);
    }
})


app.listen(3000)