import { Router } from "express";
import { SettingController } from "../controllers/settingController";

const router = Router();
const settingController = new SettingController();
router.get("/", settingController.getSettings);
router.get("/:id", settingController.getSetting);
router.post("/", settingController.createSetting);
router.put("/:id", settingController.updateSetting);
router.delete("/:id", settingController.deleteSetting);

export default router;