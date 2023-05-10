import { Request, Response } from "express";
import { Shop } from "../entities/Shop";

export class ShopController {
  public async getShop(req: Request, res: Response) {
    try {
      const shop = await Shop.findOne({
        where: {
          id: req.params.id
        }
      });
      if (shop) {
        res.status(200).json(shop);
      } else {
        res.status(404).send("Shop not found");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async getShops(req: Request, res: Response) {
    try {
      const shops = await Shop.find();
      res.status(200).json(shops);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async createShop(req: Request, res: Response) {
    try {
      const shop = await Shop.save(req.body);
      res.status(201).json(shop);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async updateShop(req: Request, res: Response) {
    try {
      const shop = await Shop.findOne({
        where: {
          id: req.params.id
        }
      });
      if (shop) {
        await shop.save(req.body);
        res.status(200).json(shop);
      } else {
        res.status(404).send("Shop not found");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async deleteShop(req: Request, res: Response) {
    try {
      const shop = await Shop.findOne({
        where: {
          id: req.params.id
        }
      });
      if (shop) {
        await shop.remove();
        res.status(204).send("Shop deleted");
      } else {
        res.status(404).send("Shop not found");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
}