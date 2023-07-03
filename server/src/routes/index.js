const { Router } = require("express");
const user = require("./user/routes/user");
const favorite = require("./favorite/routes/favorite");
const colombia = require("./colombia/routes/colombia");
const access = require("./access/routes/access");

const router = Router();

router.get("/api", async (req, res) => {
  res.json("Hello World! ✅ I'm working!");
});

router.use("/api/user", user);
router.use("/api/favorite", favorite);
router.use("/api/colombia", colombia);
router.use("/api/access", access);

module.exports = router;
