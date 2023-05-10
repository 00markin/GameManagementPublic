import { Router } from "express";
import { LotteryController } from "../controllers/lotteryController";

const router = Router();
const lotteryController = new LotteryController();
router.get("/", lotteryController.getLotteries);
router.get("/:id", lotteryController.getLottery);
router.post("/", lotteryController.createLottery);
router.put("/:id", lotteryController.updateLottery);
router.delete("/:id", lotteryController.deleteLottery);

export default router;
