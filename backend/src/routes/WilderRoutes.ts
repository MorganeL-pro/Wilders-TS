const router = require("express").Router();
const wilderController = require("../controllers/wildersController");

router.get('/', wilderController.read);

router.post('/', wilderController.create);

router.post("/update", wilderController.update);

router.delete("/:id/delete", wilderController.delete);

module.exports = router;