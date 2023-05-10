import { Router } from "express";
import { WalletController } from "../controllers/walletController";
import { createWalletStatement, deleteAllWalletStatements, getAllWalletStatements } from "../services/walletStatementService";

const router = Router();
const walletController = new WalletController();
router.get("/", walletController.getWallets);
router.get("/:id", walletController.getWallet);
router.post("/", walletController.createWallet);
router.put("/:id", walletController.updateWallet);
router.delete("/:id", walletController.deleteWallet);
router.post("/:id/statements", createWalletStatement);
router.delete("/:id/statements", deleteAllWalletStatements);
router.get("/:id/statements", getAllWalletStatements);

export default router;