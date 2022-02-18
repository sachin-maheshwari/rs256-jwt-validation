import express from "express";
import config from "config";
import verify from "./verify";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const token = req.query.token;
    const validIssuers = config.validIssuers;
    if (token) {
      try {
      verify(token, validIssuers, (err, decodedToken) => {
        if (err) {
          res.status(400).send(`Bad Request: ${err}`);
        } else {
          res.send(decodedToken);
        }
      });
    } catch (e) {
        res.status(500).send("error: " + e.message);
      };
    } else {
      res
        .status(400)
        .send("Bad Request: expecting query param like - ?token=<token>");
    }
  
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

process.on('uncaughtException', err => {
  console.log(`Uncaught Exception: ${err.message}`)
  process.exit(1)
})