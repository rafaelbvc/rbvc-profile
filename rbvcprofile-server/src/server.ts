import express, { Router } from "express"

const app = express();

const route = Router();

app.use(express.json())

app.use(route)

const port = 8050

app.listen(`Server is up on port:${port}`)