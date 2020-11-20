const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema

const productSchema = new mongoose.Schema(
  {
    product_id: {
      type: String,
      unique: true,
      trim: true,
      required: true,
    },
    title: {
      type: String,
      trim: true,
      required: true,
    },
    price: {
      type: Number,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    images: {
      type: Object,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    sold: {
      type: Number,
      default: 0,
    },
    likes: {
      type: Number,
      default: 0,
    },
    liked: {
      type: Boolean,
      default: false
		},
		userLike: {
			type: Array,
      default: []
		}
  },
  {
    timestamps: true, //importante
  }
);

module.exports = mongoose.model("productoos", productSchema);
