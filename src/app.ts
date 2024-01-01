import express from "express";
import { enviroment } from "./config";
import { GithubController } from "./presentation/github/controller";

(() => {
  main();
})();

function main() {
  const app = express();
  const controller = new GithubController();
  app.use(express.json());
  app.post("/api/github", controller.webhookHandler);
  app.listen(enviroment.PORT, () => {
    console.log(`App running on PORT ${enviroment.PORT}`);
  });
}
