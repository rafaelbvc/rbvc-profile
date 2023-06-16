// const expressRoot = require("express")
import {Router} from "express"
import path from "path"
// const pathRoot = require("path")


const router = Router();


router.get("^/$|/index(.html)?", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "index.html"))
})

module.exports = router