import mongoose, { Schema, models } from "mongoose";

const universitySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    rank: {
      type: Number,
      required: true,
    },
    yearEstablished: {
      type: Number,
      required: true,
    },
    viceChancellor: {
      type: String,
      required: true,
    },
    registrar: {
      type: String,
      required: true,
    },
    officialWebsite: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    classSchedules: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const University =
  models.University || mongoose.model("University", universitySchema);
export default University;
