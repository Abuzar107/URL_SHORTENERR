const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const URL = require("./Model/url");

const DBconnect = require("./utils/db");
const authRouter = require("./routers/auth-router");
const shortRouter = require("./routers/url-router");
const analyticsRouter = require("./routers/url-router");
const staticRoute = require("./routers/static-route")

app.use("/auth", authRouter);
app.use("/short", shortRouter);
app.use("/analytics", analyticsRouter);
app.use("/getlength", staticRoute);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  console.log(shortId);
  const entry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
});

DBconnect().then(() => {
  app.listen(5000, () => {
    console.log("listing on port 5000");
  });
});
