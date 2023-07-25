import { Router } from "express";
import {
  getMessageByUser,
  createMessage,
  updateMessage,
  deleteMessage,
} from "../controllers/messagesController";
const router = Router();

router
  .route("/")
  .get(getMessageByUser)
  .post(createMessage)
  .patch(updateMessage)
  .delete(deleteMessage);

module.exports = router;