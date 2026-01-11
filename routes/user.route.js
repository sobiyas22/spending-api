import express from "express";
import { getUserById, createUser,updateUserInformation} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/create", createUser);
router.get("/:id", getUserById);
router.put("/:id/update", updateUserInformation);

export default router;
