// const expressUser = require("express");
import {Router} from "express"
// const usersControllerRouter = require("../controllers/usersController");
import {getUsers, createUser, updateUser, deleteUser} from "../controllers/usersController"



const router = Router();

router.route("/").get(getUsers).post(createUser).patch(updateUser).delete(deleteUser)

module.exports = router;

// const router = Router();

// router
//   .route("/")
//   .get(usersControllerRouter.getUsersController)
//   .post(usersControllerRouter.createUserController)
//   .patch(usersControllerRouter.updateUserController)
//   .delete(usersControllerRouter.deleteUserController);

// module.exports = router;
