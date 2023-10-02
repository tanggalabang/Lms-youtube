import express from "express";
import { authorizeRoles, isAutheticated } from "../middleware/auth";
import { getCoursesAnalytics, getOrdersAnalytics, getUsersAnalytics } from "../controllers/analytics.controller";
const analyticsRouter = express.Router();

analyticsRouter.get(
  "/get-courses-analytics",
  isAutheticated,
  authorizeRoles("admin"),
 getCoursesAnalytics 
);
analyticsRouter.get(
  "/get-orders-analytics",
  isAutheticated,
  authorizeRoles("admin"),
 getOrdersAnalytics 
);

analyticsRouter.get(
  "/get-users-analyticsid",
  isAutheticated,
  authorizeRoles("admin"),
  getUsersAnalytics
);

export default analyticsRouter;
