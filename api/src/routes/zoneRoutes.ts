import { Router } from "express";
import { ZoneController } from "../controllers/zoneController";

const router = Router();
const zoneController = new ZoneController();
router.get("/", zoneController.getZones);
router.get("/:id", zoneController.getZone);
router.post("/", zoneController.createZone);
router.put("/:id", zoneController.updateZone);
router.delete("/:id", zoneController.deleteZone);

export default router;