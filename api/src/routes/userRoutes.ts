import { Router } from "express";
import { UserController } from "../controllers/userController";
import {
  changeUserRole, createUserRole, getAllUserRoles, deleteAllUserRoles
} from "../services/userRoleService";

const router = Router();
const userController = new UserController();
router.get("/", userController.getUsers);
router.get("/:id", userController.getUser);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.get("/:id/roles", getAllUserRoles);
router.put("/:id/roles", changeUserRole);
router.post("/:id/roles", createUserRole);
router.delete("/:id/roles", deleteAllUserRoles);

export default router;