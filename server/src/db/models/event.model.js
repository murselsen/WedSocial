import mongoose from "mongoose";
const EventSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: { type: String, required: true },
    type: {
      type: String,
      enum: ["wedding", "conference", "gala", "other"],
      default: "wedding",
    },
    date: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    location: {
      name: String,
      address: String,
      coordinates: { lat: Number, lng: Number },
    },
    // Esneklik Katmanı: Tasarım ayarları burada saklanır
    theme_config: {
      primary_color: { type: String, default: "#2ecc71" }, // Senin istediğin yeşil tonu
      font_family: String,
      welcome_message: String,
    },
    is_active: { type: Boolean, default: true },
  },
  { timestamps: true }
);
const Event = mongoose.model("event", EventSchema);

export default Event;
