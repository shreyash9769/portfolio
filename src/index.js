const express = require("express")
const contactMessage = require("./account")
const app = express()
app.use(express.json())
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept,Authorization")
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE")
    next()
})


app.post("/contact", (req, res) => {
    try {
        if (!req.body.name || !req.body.email || !req.body.message) {
            throw new Error("Please enter all the details")
        }
        contactMessage(req.body.email, req.body.name, req.body.message)
        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

app.listen(process.env.PORT, () => {
    console.log("Port")
})