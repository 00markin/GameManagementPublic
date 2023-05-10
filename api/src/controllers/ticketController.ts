import { Request, Response } from "express";
import { Ticket } from "../entities/Ticket";

export class TicketController {
  public async getTicket(req: Request, res: Response) {
    try {
      const ticket = await Ticket.findOne({
        where: {
          id: req.params.id
        }
      });
      if (ticket) {
        res.status(200).json(ticket);
      } else {
        res.status(404).send("Ticket not found");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async getTickets(req: Request, res: Response) {
    try {
      const tickets = await Ticket.find();
      res.status(200).json(tickets);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async createTicket(req: Request, res: Response) {
    try {
      const ticket = await Ticket.save(req.body);
      res.status(201).json(ticket);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async updateTicket(req: Request, res: Response) {
    try {
      const ticket = await Ticket.findOne({
        where: {
          id: req.params.id
        }
      });
      if (ticket) {
        await ticket.save(req.body);
        res.status(200).json(ticket);
      } else {
        res.status(404).send("Ticket not found");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async deleteTicket(req: Request, res: Response) {
    try {
      const ticket = await Ticket.findOne({
        where: {
          id: req.params.id
        }
      });
      if (ticket) {
        await ticket.remove();
        res.status(200).send("Ticket deleted");
      } else {
        res.status(404).send("Ticket not found");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
}