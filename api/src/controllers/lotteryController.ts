import { Request, Response } from "express";
import { Lottery } from "../entities/Lottery";

export class LotteryController {
  public async getLottery(req: Request, res: Response) {
    try {
      const lottery = await Lottery.findOne({
        where: {
          id: req.params.id
        }
      });
      if (lottery) {
        res.status(200).json(lottery);
      } else {
        res.status(404).send("Lottery not found");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async getLotteries(req: Request, res: Response) {
    try {
      const lotteries = await Lottery.find();
      res.status(200).json(lotteries);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async createLottery(req: Request, res: Response) {
    try {
      const lottery = await Lottery.save(req.body);
      res.status(201).json(lottery);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async updateLottery(req: Request, res: Response) {
    try {
      const lottery = await Lottery.findOne({
        where: {
          id: req.params.id
        }
      });
      if (lottery) {
        await lottery.save(req.body);
        res.status(200).json(lottery);
      } else {
        res.status(404).send("Lottery not found");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async deleteLottery(req: Request, res: Response) {
    try {
      const lottery = await Lottery.findOne({
        where: {
          id: req.params.id
        }
      });
      if (lottery) {
        await lottery.remove();
        res.status(200).send("Lottery deleted");
      } else {
        res.status(404).send("Lottery not found");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
}