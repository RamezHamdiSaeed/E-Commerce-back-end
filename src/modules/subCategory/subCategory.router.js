import { Router } from "express";
const router = Router();
import * as subCategoriesController from "./subCategory.controller.js";
import { uploadFile } from "../../services/multer.cloud.js";
import { fileTypeValidation } from "../../utils/allowedFileTypes.js";
import { validation } from "../../middlewares/validation.js";
import * as validators from "./subCategory.validation.js";
import { asyncHandler } from "../../utils/errorHandler.js";
import { auth } from "../../middlewares/auth.js";
import { userRole } from "../../utils/userRoles.js";
import { checkAvailability } from "../../middlewares/checkAvailability.js";

router.get("/getEverySubCategory", subCategoriesController.getEverySubCategory);
router.get("/getAllSubCategories", subCategoriesController.getAllSubCategories);
router.get(
  "/getSpecificSubCategory/:subCategoryId",
  asyncHandler(subCategoriesController.getSpecificSubCategory)
);

//===================================================================
//===================================================================

router.delete(
  "/deleteSubCategory",
  auth([userRole.superAdmin]),
  validation(validators.deleteSubCategory),
  checkAvailability,
  subCategoriesController.deleteSubCategory
);
//===================================================================
//===================================================================
router.use(auth([userRole.admin, userRole.superAdmin]));
router.use(checkAvailability);
router.post(
  "/addSubCategory",
  uploadFile(fileTypeValidation.image).single("image"),
  validation(validators.addSubCategory),
  subCategoriesController.addSubCategory
);
router.put(
  "/updateSubCategory",
  uploadFile(fileTypeValidation.image).single("image"),
  validation(validators.updateSubCategory),
  subCategoriesController.updateSubCategory
);

export default router;
