import express from "express";
import { authorizeRoles, isAutheticated } from "../middleware/auth";
import { createOrder, getAllOrders } from "../controllers/order.controller";
import { updateAccessToken } from "../controllers/user.controller";
const orderRouter = express.Router();

orderRouter.post("/create-order", isAutheticated, createOrder);
orderRouter.get(
  "/get-orders",
  updateAccessToken,
  isAutheticated,
  authorizeRoles("admin"),
  getAllOrders
);

export default orderRouter;
