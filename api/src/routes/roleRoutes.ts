// Routes for roleController
// include role functions in userRoleService
// export roleRoutes

import { Router } from "express";
import { RoleController } from "../controllers/roleController";
import { getAllRoleUsers, changeRoleUsers } from "../services/userRoleService";

const router = Router();
const roleController = new RoleController();
router.get("/", roleController.getRoles);
router.get("/:id", roleController.getRole);
router.post("/", roleController.createRole);
router.put("/:id", roleController.updateRole);
router.delete("/:id", roleController.deleteRole);
router.get("/:id/users", getAllRoleUsers);
router.put("/:id/users", changeRoleUsers);

export default router;