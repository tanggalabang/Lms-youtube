import express from "express";
import {
  activateUser,
  deleteUser,
  getAllUsers,
  getUserInfo,
  loginUser,
  logoutUser,
  registrationUser,
  socialAuth,
  updateAccessToken,
  updateProfilePicture,
  updateUserInfo,
  updateUserPassword,
  updateUserRole,
} from "../controllers/user.controller";
const userRouter = express.Router();
import { authorizeRoles, isAutheticated } from "../middleware/auth";

userRouter.post("/registration", registrationUser);
userRouter.post("/activate-user", activateUser);
userRouter.post("/login", loginUser);
userRouter.get("/logout", isAutheticated, logoutUser);
userRouter.get("/refresh", updateAccessToken);
userRouter.get("/me",updateAccessToken, isAutheticated, getUserInfo);
userRouter.post("/social-auth", socialAuth);
userRouter.put("/update-user-info",updateAccessToken, isAutheticated, updateUserInfo);
userRouter.put("/update-user-password",updateAccessToken, isAutheticated, updateUserPassword);
userRouter.put("/update-user-avatar",updateAccessToken, isAutheticated, updateProfilePicture);
userRouter.get(
  "/get-users",
  updateAccessToken,
  isAutheticated,
  authorizeRoles("admin"),
  getAllUsers
);
userRouter.put(
  "/update-user",
  updateAccessToken,
  isAutheticated,
  authorizeRoles("admin"),
  updateUserRole
);
userRouter.delete(
  "/delete-user/:id",
  updateAccessToken,
  isAutheticated,
  authorizeRoles("admin"),
  deleteUser
);

export default userRouter;
