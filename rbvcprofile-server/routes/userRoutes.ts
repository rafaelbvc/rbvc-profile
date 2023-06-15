const expressUser = require("express");
const router = expressUser.Router();

router.route("/").get().post().patch().delete();

module.exports = router;
