import { Router } from "express";
import shopRoutes from "./shopRoutes";
import partnerRoutes from "./partnerRoutes";
import settingRoutes from "./settingRoutes";
import gameTemplateRoutes from "./gameTemplateRoutes";
import gameRoutes from "./gameRoutes";
import statementRoutes from "./statementRoutes";
import userRoutes from "./userRoutes";
import lotteryRoutes from "./lotteryRoutes";
import ticketRoutes from "./ticketRoutes";
import walletRoutes from "./walletRoutes";
import zoneRoutes from "./zoneRoutes";
import roleRoutes from "./roleRoutes";

const router = Router();

router.use("/api/shops", shopRoutes);
router.use("/api/partners", partnerRoutes);
router.use("/api/settings", settingRoutes);
router.use("/api/game-templates", gameTemplateRoutes);
router.use("/api/games", gameRoutes);
router.use("/api/statements", statementRoutes);
router.use("/api/users", userRoutes);
router.use("/api/lotteries", lotteryRoutes);
router.use("/api/tickets", ticketRoutes);
router.use("/api/wallets", walletRoutes);
router.use("/api/zones", zoneRoutes);
router.use("/api/roles", roleRoutes);

export default router;