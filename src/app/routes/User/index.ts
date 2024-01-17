import express from "express";
import { UserController } from "../../controllers/user.controller";

const router = express.Router();

router
  .get("/user/:userId", UserController.getUser)
  .post("/user/create", UserController.createUser)
  .put("/user/update/:userId", UserController.updateUser)
  .delete("/user/delete/:userId", UserController.deleteUser);
  
export default router;