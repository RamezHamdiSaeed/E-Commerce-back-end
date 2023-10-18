
import userModel from "../../../DB/models/userModel.js";
import { ApiFeatures } from "../../utils/apiFeatures.js";
import cloudinary from "../../utils/cloudinary.js";
import { customAlphabet } from "nanoid";
const nanoid = customAlphabet("12345678!_=abcdefghmZxyiolk:*", 15);
import slugify from "slugify";
import addressModel from "../../../DB/models/address/addressModel.js";
import user_addressModel from "../../../DB/models/address/user_addressModel.js";