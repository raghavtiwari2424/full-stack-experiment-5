const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    // name: must be a non-empty string, 2-100 characters
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,          // strips leading/trailing whitespace
      minlength: [2, "Name must be at least 2 characters"],
      maxlength: [100, "Name cannot exceed 100 characters"]
    },

    // price: must be a non-negative number
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price cannot be negative"]
    },

    category: {
      type: String,
      required: [true, "Category is required"],
      enum: {
        values: ["Electronics", "Clothing", "Food", "Books", "Other"],
        message: "Category must be: Electronics, Clothing, Food, Books, or Other"
      }
    },

    inStock: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);
productSchema.methods.getPriceWithTax = function (taxPercent) {
  return +(this.price * (1 + taxPercent / 100)).toFixed(2);
};

// Compile schema → Model. Collection name = "products" (auto)
module.exports = mongoose.model("Product", productSchema);
