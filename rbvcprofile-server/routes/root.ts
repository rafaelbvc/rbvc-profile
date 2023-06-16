const expressRoot = require("express")
const pathRoot = require("path")
const routerRoot = expressRoot.Router();


routerRoot.get("^/$|/index(.html)?", (req, res) => {
    res.sendFile(pathRoot.join(__dirname, "..", "views", "index.html"))
})

module.exports = routerRoot