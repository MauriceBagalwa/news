const controller = require("../controllers");
const router = require("express").Router();
router.get("/", controller.auther.authers);
router.post("/", controller.auther.auther);
router.put("/", controller.auther.update);
router.put("/deleted", controller.auther.delete);

module.exports = router;
