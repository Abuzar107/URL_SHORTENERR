const router = require("express").Router();
const URL = require("../Model/url");

router.get("/", async (req, res) => {
  try {
    const shortId = req.curUrl;
    const allUrls = await URL.find({ shortId });
    console.log(allUrls)
    return res.status(200).json(allUrls);
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;
