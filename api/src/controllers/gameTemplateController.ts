import { Request, Response } from "express";
import { GameTemplate } from "../entities/GameTemplate";

export class GameTemplateController {
  public async getGameTemplate(req: Request, res: Response) {
    try {
      const gameTemplate = await GameTemplate.findOne({
        where: {
          id: req.params.id
        }
      });
      if (gameTemplate) {
        res.status(200).json(gameTemplate);
      } else {
        res.status(404).send("GameTemplate not found");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async getGameTemplates(req: Request, res: Response) {
    try {
      const gameTemplates = await GameTemplate.find();
      res.status(200).json(gameTemplates);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async createGameTemplate(req: Request, res: Response) {
    try {
      const gameTemplate = await GameTemplate.save(req.body);
      res.status(201).json(gameTemplate);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async updateGameTemplate(req: Request, res: Response) {
    try {
      const gameTemplate = await GameTemplate.findOne({
        where: {
          id: req.params.id
        }
      });
      if (gameTemplate) {
        await gameTemplate.save(req.body);
        res.status(200).json(gameTemplate);
      } else {
        res.status(404).send("GameTemplate not found");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async deleteGameTemplate(req: Request, res: Response) {
    try {
      const gameTemplate = await GameTemplate.findOne({
        where: {
          id: req.params.id
        }
      });
      if (gameTemplate) {
        await gameTemplate.remove();
        res.status(200).send("GameTemplate deleted");
      } else {
        res.status(404).send("GameTemplate not found");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
}