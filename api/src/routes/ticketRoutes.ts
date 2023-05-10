import { Router } from "express";
import { TicketController } from "../controllers/ticketController";

const router = Router();
const ticketController = new TicketController();
router.get("/", ticketController.getTickets);
router.get("/:id", ticketController.getTicket);
router.post("/", ticketController.createTicket);
router.put("/:id", ticketController.updateTicket);
router.delete("/:id", ticketController.deleteTicket);

export default router;