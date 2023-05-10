import { Request, Response } from "express";
import { Role } from "../entities/Role";

export class RoleController {
  public async getRole(req: Request, res: Response) {
    try {
      const role = await Role.findOne({
        where: {
          id: req.params.id
        }
      });
      if (role) {
        res.status(200).json(role);
      } else {
        res.status(404).send("Role not found");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async getRoles(req: Request, res: Response) {
    try {
      const roles = await Role.find();
      res.status(200).json(roles);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async createRole(req: Request, res: Response) {
    try {
      const role = await Role.save(req.body);
      res.status(201).json(role);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async updateRole(req: Request, res: Response) {
    try {
      const role = await Role.findOne({
        where: {
          id: req.params.id
        }
      });
      if (role) {
        await role.save(req.body);
        res.status(200).json(role);
      } else {
        res.status(404).send("Role not found");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async deleteRole(req: Request, res: Response) {
    try {
      const role = await Role.findOne({
        where: {
          id: req.params.id
        }
      });
      if (role) {
        await role.remove();
        res.status(200).send("Role deleted");
      } else {
        res.status(404).send("Role not found");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
}