import { Request, Response } from "express";
import { User } from "../entities/User";
import { Role } from "../entities/Role";

export async function createUserRole(req: Request, res: Response) {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id
      }
    });
    if (user) {
      const role = await Role.create(req.body);
      role.user = user;
      await role.save();
      res.status(201).json(role);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function getAllUserRoles(req: Request, res: Response) {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id
      }
    });
    if (user) {
      const roles = await user.roles;
      res.status(200).json(roles);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function deleteAllUserRoles(req: Request, res: Response) {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id
      }
    });
    if (user) {
      user.roles = [];
      await user.save();
      res.status(200).send("Roles deleted");
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function getAllRoleUsers(req: Request, res: Response) {
  try {
    const role = await Role.findOne({
      where: {
        id: req.params.id
      }
    });
    if (role) {
      const users = await role.users;
      res.status(200).json(users);
    } else {
      res.status(404).send("Role not found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function changeRoleUsers(req: Request, res: Response) {
  try {
    const role = await Role.findOne({
      where: {
        id: req.params.id
      }
    });
    if (role) {
      role.users = req.body;
      await role.save();
      res.status(200).json(role);
    } else {
      res.status(404).send("Role not found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function changeUserRole(req: Request, res: Response) {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id
      }
    });
    if (user) {
      user.roles = req.body;
      await user.save();
      res.status(200).json(user);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
}
