import express from "express";
import crypto from "crypto";
const app = express();
const generateRandomString = () => {
  return crypto.randomBytes(3).toString("base64url");
};
app.get("/link", (req, res) => {
  const { link } = req.body;
  const randomString = generateRandomString();
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
