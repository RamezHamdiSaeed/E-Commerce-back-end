import mongoose, { Schema, Types, model } from "mongoose";

const product_itemSchema = new Schema(
  {
    productID: { type: Types.ObjectId, ref: "Product", required: true },
    item_name: { type: String, required: true, trim: true, unique: true }, // Name contains any specifications.
    item_slug: { type: String, required: true, trim: true, unique: true },
    customID: String,

    color: String,
    size: {
      type: String,
      enum: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    },
    specifications: Schema.Types.Mixed, //To make specifications in an object.
    stock: { type: Number, required: true, default: 0 },
    soldItems: { type: Number, default: 0 },
    totalAmount: { type: Number, default: 0 },
    price: { type: Number, required: true, default: 0 },
    discount: { type: Number, default: 0 },
    discountType: { type: String, enum: ["percentage", "amount"] },
    discountPeriod: Number,
    discountFinished: { type: Boolean },
    paymentPrice: { type: Number, default: 0 },
    images: [
      {
        secure_url: { type: String, required: false }, //TODO : make required true after adding fake data
        public_id: { type: String, required: false }, //TODO : make required true after adding fake data
      },
    ],
    mainImage: {
      secure_url: { type: String, required: false }, //TODO : make required true after adding fake data
      public_id: { type: String, required: false }, //TODO : make required true after adding fake data
    },
    createdBy: { type: Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

const product_itemModel =
  model.Product_item || mongoose.model("Product_item", product_itemSchema);

export default product_itemModel;