import { Router } from "express";
import { ShopController } from "../controllers/shopController";

const router = Router();
const shopController = new ShopController();
router.get("/", shopController.getShops);
router.get("/:id", shopController.getShop);
router.post("/", shopController.createShop);
router.put("/:id", shopController.updateShop);
router.delete("/:id", shopController.deleteShop);

export default router;