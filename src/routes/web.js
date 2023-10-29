import express from "express";
import { getHomePage } from "../controllers/homepageController.js";
import { getWebHook, postWebHook } from "../controllers/chatbotController.js";

const router = express.Router();

const initWebRoutes = (app) => {
  router.get("/", getHomePage);
  router.get("/webhooks", getWebHook);
  router.post("/webhooks", postWebHook);

  // router.get("/about", (req, res) => {
  //     return res.render("about.ejs");
  // });

  // router.get("/crud", (req, res) => {
  //     return res.render("crud.ejs");
  // });

  // router.get("/chat", (req, res) => {
  //     return res.render("chat.ejs");
  // });

  return app.use("/", router);
};

export default initWebRoutes;
