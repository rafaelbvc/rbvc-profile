import { Router } from "express";
import {
  // getMessages,
  getMessageByUser,
  createMessage,
  updateMessage,
  deleteMessage,
} from "../controllers/messagesController";
const router = Router();

router
  .route("/")
  .get(getMessageByUser)
  // .get(getMessages)
  .post(createMessage)
  .patch(updateMessage)
  .delete(deleteMessage);

module.exports = router;
