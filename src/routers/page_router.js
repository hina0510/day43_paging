const pageCtrl = require("../controller/page_controller");
const router = require("express").Router();

router.get("/", pageCtrl.views.index);
router.get("/list", pageCtrl.views.list);
router.get("/write_form", pageCtrl.views.writeForm);
router.post("/write", pageCtrl.process.write);
router.get("/content/:num", pageCtrl.views.content);

//router.get("/list", pageCtrl.views.content);
//router.get("/", (req, res)=>{res.render("index")});

module.exports = router;