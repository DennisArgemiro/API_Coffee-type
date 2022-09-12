const Express = require("express")
const homeController = require("./controllers/home")
const setTextController =require("./controllers/setText")

const app = Express()

app.use("/", homeController)
app.use("/", setTextController)

app.listen(80,()=>{
    console.log("Server ON")
})