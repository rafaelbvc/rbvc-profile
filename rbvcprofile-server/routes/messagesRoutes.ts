import {Router} from "express"
import { getMessages, createMessage, updateMessage, deleteMessage } from "../controllers/messagesController"
const router = Router();


router.route("/").get(getMessages).post(createMessage).patch(updateMessage).delete(deleteMessage)

module.exports = router