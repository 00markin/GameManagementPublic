import { Request, Response } from "express";
import { Statement } from "../entities/Statement";

export class StatementController {
  public async getStatement(req: Request, res: Response) {
    try {
      const statement = await Statement.findOne({
        where: {
          id: req.params.id
        }
      });
      if (statement) {
        res.status(200).json(statement);
      } else {
        res.status(404).send("Statement not found");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async getStatements(req: Request, res: Response) {
    try {
      const statements = await Statement.find();
      res.status(200).json(statements);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async createStatement(req: Request, res: Response) {
    try {
      const statement = await Statement.save(req.body);
      res.status(201).json(statement);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async updateStatement(req: Request, res: Response) {
    try {
      const statement = await Statement.findOne({
        where: {
          id: req.params.id
        }
      });
      if (statement) {
        await statement.save(req.body);
        res.status(200).json(statement);
      } else {
        res.status(404).send("Statement not found");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async deleteStatement(req: Request, res: Response) {
    try {
      const statement = await Statement.findOne({
        where: {
          id: req.params.id
        }
      });
      if (statement) {
        await statement.remove();
        res.status(200).send("Statement deleted");
      } else {
        res.status(404).send("Statement not found");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
}