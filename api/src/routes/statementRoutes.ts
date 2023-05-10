import { Router } from "express";
import { StatementController } from "../controllers/statementController";

const router = Router();
const statementController = new StatementController();
router.get("/", statementController.getStatements);
router.get("/:id", statementController.getStatement);
router.post("/", statementController.createStatement);
router.put("/:id", statementController.updateStatement);
router.delete("/:id", statementController.deleteStatement);

export default router;