import { Request, Response } from "express";
import { Partner } from "../entities/Partner";

export class PartnerController {
  public async getPartner(req: Request, res: Response) {
    try {
      const partner = await Partner.findOne({
        where: {
          id: req.params.id
        }
      });
      if (partner) {
        res.status(200).json(partner);
      } else {
        res.status(404).send("Partner not found");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async getPartners(req: Request, res: Response) {
    try {
      const partners = await Partner.find();
      res.status(200).json(partners);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async createPartner(req: Request, res: Response) {
    try {
      const partner = await Partner.save(req.body);
      res.status(201).json(partner);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async updatePartner(req: Request, res: Response) {
    try {
      const partner = await Partner.findOne({
        where: {
          id: req.params.id
        }
      });
      if (partner) {
        await partner.save(req.body);
        res.status(200).json(partner);
      } else {
        res.status(404).send("Partner not found");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async deletePartner(req: Request, res: Response) {
    try {
      const partner = await Partner.findOne({
        where: {
          id: req.params.id
        }
      });
      if (partner) {
        await partner.remove();
        res.status(200).send("Partner deleted");
      } else {
        res.status(404).send("Partner not found");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
}