const Express = require("express")
const homeController = require("./controllers/home")
const setTextController =require("./controllers/setText")

const app = Express()
const port  =  process.env.PORT | 3000

app.use("/", homeController)
app.use("/", setTextController)

app.listen(port, ()=>{
    console.log("Rodando na porta: " + port)
})