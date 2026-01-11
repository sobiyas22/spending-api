import express from "express";
import { getUserById, createUser,updateUserInformation, deleteUser} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/create", createUser);
router.get("/:id", getUserById);
router.patch("/:id/update", updateUserInformation);
router.delete("/:id",deleteUser); 
export default router;
