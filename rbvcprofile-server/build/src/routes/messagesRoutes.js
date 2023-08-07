"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageRouter = void 0;
const express_1 = require("express");
const messagesController_1 = require("../controllers/messagesController");
const router = (0, express_1.Router)();
exports.messageRouter = router;
// router.use(verifyJWT);
router
    .route("/")
    .get(messagesController_1.getAllMessages)
    .post(messagesController_1.createNewMessages)
    .patch(messagesController_1.updateMessage)
    .delete(messagesController_1.deleteMessage);
