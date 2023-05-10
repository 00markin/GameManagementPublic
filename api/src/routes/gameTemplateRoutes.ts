import { Router } from "express";
import { GameTemplateController } from "../controllers/gameTemplateController";

const router = Router();
const gameTemplateController = new GameTemplateController();
router.get("/", gameTemplateController.getGameTemplates);
router.get("/:id", gameTemplateController.getGameTemplate);
router.post("/", gameTemplateController.createGameTemplate);
router.put("/:id", gameTemplateController.updateGameTemplate);
router.delete("/:id", gameTemplateController.deleteGameTemplate);

export default router;