import { Request, Response } from "express";
import { Wallet } from "../entities/Wallet";
import { Statement } from "../entities/Statement";

export async function createWalletStatement(req: Request, res: Response) {
  try {
    const wallet = await Wallet.findOne({
      where: {
        id: req.params.id
      }
    });
    if (wallet) {
      const statement = await Statement.create(req.body);
      statement.wallet = wallet;
      await statement.save();
      res.status(201).json(statement);
    } else {
      res.status(404).send("Wallet not found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function getAllWalletStatements(req: Request, res: Response) {
  try {
    const wallet = await Wallet.findOne({
      where: {
        id: req.params.id
      }
    });
    if (wallet) {
      const statements = await wallet.statements;
      res.status(200).json(statements);
    } else {
      res.status(404).send("Wallet not found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function deleteAllWalletStatements(req: Request, res: Response) {
  try {
    const wallet = await Wallet.findOne({
      where: {
        id: req.params.id
      }
    });
    if (wallet) {
      wallet.statements = [];
      await wallet.save();
      res.status(200).send("Statements deleted");
    } else {
      res.status(404).send("Wallet not found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
}