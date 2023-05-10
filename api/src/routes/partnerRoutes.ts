import { Router } from "express";
import { PartnerController } from "../controllers/partnerController";

const router = Router();
const partnerController = new PartnerController();
router.get("/", partnerController.getPartners);
router.get("/:id", partnerController.getPartner);
router.post("/", partnerController.createPartner);
router.put("/:id", partnerController.updatePartner);
router.delete("/:id", partnerController.deletePartner);

export default router;