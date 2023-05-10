import { Request, Response } from "express";
import { Wallet } from "../entities/Wallet";

export class WalletController {
  public async getWallet(req: Request, res: Response) {
    try {
      const wallet = await Wallet.findOne({
        where: {
          id: req.params.id
        }
      });
      if (wallet) {
        res.status(200).json(wallet);
      } else {
        res.status(404).send("Wallet not found");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async getWallets(req: Request, res: Response) {
    try {
      const wallets = await Wallet.find();
      res.status(200).json(wallets);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async createWallet(req: Request, res: Response) {
    try {
      const wallet = await Wallet.save(req.body);
      res.status(201).json(wallet);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async updateWallet(req: Request, res: Response) {
    try {
      const wallet = await Wallet.findOne({
        where: {
          id: req.params.id
        }
      });
      if (wallet) {
        await wallet.save(req.body);
        res.status(200).json(wallet);
      } else {
        res.status(404).send("Wallet not found");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async deleteWallet(req: Request, res: Response) {
    try {
      const wallet = await Wallet.findOne({
        where: {
          id: req.params.id
        }
      });
      if (wallet) {
        await wallet.remove();
        res.status(200).send("Wallet deleted");
      } else {
        res.status(404).send("Wallet not found");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
