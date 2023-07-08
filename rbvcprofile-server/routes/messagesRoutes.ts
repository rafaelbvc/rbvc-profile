import {Router} from "express"
import { getMessages, createMessage } from "../controllers/messagesController"
const router = Router();


router.route("/").get(getMessages).post(createMessage)

module.exports = router