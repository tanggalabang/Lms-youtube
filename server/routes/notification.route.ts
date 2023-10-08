import express from "express";
import { authorizeRoles, isAutheticated } from "../middleware/auth";
import { getNotifications, updatedNotification } from "../controllers/notification.controller";
import { updateAccessToken } from "../controllers/user.controller";
const notificationRouter = express.Router();

notificationRouter.get(
  "/get-all-notification",
  updateAccessToken,
  isAutheticated,
  authorizeRoles("admin"),
  getNotifications
);
notificationRouter.put(
  "/update-notification/:id",
  updateAccessToken,
  isAutheticated,
  authorizeRoles("admin"),
 updatedNotification 
);

export default notificationRouter;
