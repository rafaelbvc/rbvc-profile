const expressUser = require("express");
const router = expressUser.Router();
const usersControllerRouter = require("../controllers/usersController");

router
  .route("/")
  .get(usersControllerRouter.getUsersController)
  .post(usersControllerRouter.createUserController)
  .patch(usersControllerRouter.updateUserController)
  .delete(usersControllerRouter.deleteUserController);

module.exports = router;
