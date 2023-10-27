import { Router } from "express";
import * as orderController from "./order.controller.js";
import { asyncHandler } from "../../utils/errorHandler.js";
import { auth } from "../../middlewares/auth.js";
import { userRole } from "../../utils/userRoles.js";
import { validation } from "../../middlewares/validation.js";
import * as validators from "./order.validation.js";
import { checkAvailability } from "../../middlewares/checkAvailability.js";

const router = Router();

export default router;