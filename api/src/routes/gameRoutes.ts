import { Router } from "express";
import { GameController } from "../controllers/gameController";

const router = Router();
const gameController = new GameController();
router.get("/", gameController.getGames);
router.get("/:id", gameController.getGame);
router.post("/", gameController.createGame);
router.put("/:id", gameController.updateGame);
router.delete("/:id", gameController.deleteGame);

export default router;
