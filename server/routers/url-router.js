const express = require("express");
const router = express.Router();

const { handleGenerateNewShortURL, handleGetAnalytics } = require("../controllers/url-controller");

router.post("/url", handleGenerateNewShortURL);
router.get("/:shortId", handleGetAnalytics);

module.exports = router;
