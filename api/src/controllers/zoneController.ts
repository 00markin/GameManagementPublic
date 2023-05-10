import { Request, Response } from "express";
import { Zone } from "../entities/Zone";

export class ZoneController {
  public async getZone(req: Request, res: Response) {
    try {
      const zone = await Zone.findOne({
        where: {
          id: req.params.id
        }
      });
      if (zone) {
        res.status(200).json(zone);
      } else {
        res.status(404).send("Zone not found");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async getZones(req: Request, res: Response) {
    try {
      const zones = await Zone.find();
      res.status(200).json(zones);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async createZone(req: Request, res: Response) {
    try {
      const zone = await Zone.save(req.body);
      res.status(201).json(zone);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async updateZone(req: Request, res: Response) {
    try {
      const zone = await Zone.findOne({
        where: {
          id: req.params.id
        }
      });
      if (zone) {
        await zone.save(req.body);
        res.status(200).json(zone);
      } else {
        res.status(404).send("Zone not found");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async deleteZone(req: Request, res: Response) {
    try {
      const zone = await Zone.findOne({
        where: {
          id: req.params.id
        }
      });
      if (zone) {
        await zone.remove();
        res.status(200).send("Zone deleted");
      } else {
        res.status(404).send("Zone not found");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
}