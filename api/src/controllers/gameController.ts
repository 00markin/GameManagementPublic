import { Request, Response } from "express";
import { Game } from "../entities/Game";

export class GameController {
  public async getGame(req: Request, res: Response) {
    try {
      const game = await Game.findOne({
        where: {
          id: req.params.id
        }
      });
      if (game) {
        res.status(200).json(game);
      } else {
        res.status(404).send("Game not found");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async getGames(req: Request, res: Response) {
    try {
      const games = await Game.find();
      res.status(200).json(games);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async createGame(req: Request, res: Response) {
    try {
      const game = await Game.save(req.body);
      res.status(201).json(game);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async updateGame(req: Request, res: Response) {
    try {
      const game = await Game.findOne({
        where: {
          id: req.params.id
        }
      });
      if (game) {
        await game.save(req.body);
        res.status(200).json(game);
      } else {
        res.status(404).send("Game not found");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async deleteGame(req: Request, res: Response) {
    try {
      const game = await Game.findOne({
        where: {
          id: req.params.id
        }
      });
      if (game) {
        await game.remove();
        res.status(200).send("Game deleted");
      } else {
        res.status(404).send("Game not found");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
