import { Request, Response } from "express";
import { User } from "../entities/User";

export class UserController {
  public async getUser(req: Request, res: Response) {
    try {
      const user = await User.findOne({
        where: {
          id: req.params.id
        }
      });
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).send("User not found");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async getUsers(req: Request, res: Response) {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async createUser(req: Request, res: Response) {
    try {
      const user = await User.save(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async updateUser(req: Request, res: Response) {
    try {
      const user = await User.findOne({
        where: {
          id: req.params.id
        }
      });
      if (user) {
        await user.save(req.body);
        res.status(200).json(user);
      } else {
        res.status(404).send("User not found");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async deleteUser(req: Request, res: Response) {
    try {
      const user = await User.findOne({
        where: {
          id: req.params.id
        }
      });
      if (user) {
        await user.remove();
        res.status(200).send("User deleted");
      } else {
        res.status(404).send("User not found");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
}