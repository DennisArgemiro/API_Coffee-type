const express = require("express")
const router = express.Router()
const fs = require("fs");

router.get("/sendText", async (req, res)=>{

function getRandomText() {
    const text = Math.floor(Math.random() *3);
    return __dirname + "/../public/text/" + `text${text}.txt`;
}

const path = getRandomText();
const data = fs.readFileSync(path, 'utf-8')

const obj = JSON.parse('{"text":"'+data+'"}')

res.json({
    text: data,
})
    
}) 
module.exports = router
 