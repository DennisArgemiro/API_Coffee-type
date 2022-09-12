const Express = require("express")
const setTextController =require("./api/setText")

const app = Express()
const port  =  process.env.PORT | 3000

app.use("/", setTextController)

app.listen(port, ()=>{
    console.log("Rodando na porta: " + port)
})