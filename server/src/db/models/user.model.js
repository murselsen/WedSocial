import { Schema, model } from "mongoose";
import { ROLES } from "../../constants/index.js";
const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    role: { type: String, enum: Object.values(ROLES), default: ROLES.USER },
    phoneNumber: {
      type: Number,
      required: false,
      default: null,
    },
    photoURL: {
      type: String,
      required: false,
      default:
        "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
    },
    lastLoginAt: { type: Date, default: null },
    verifiedAt: { type: Date, default: null },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};
const User = model("User", userSchema);

export default User;
