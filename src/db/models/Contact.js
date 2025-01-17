import { Schema, model } from "mongoose";
import { mongooseSaveError } from "./hooks.js";

const contactShema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    default: false,
  },
  isFavourite: {
    type: Boolean,
    default: false,
  },
  contactType: {
    type: String,
    enum: ['work', 'home', 'personal'],
    default: 'personal',
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  photo: {
    type: String
  },
},
  {
    timestamps: true,
    versionKey: false,
  },
);

contactShema.post("save", mongooseSaveError);

contactShema.post("findOneAndUpdate", mongooseSaveError);

export const ContactsCollection = model("contact", contactShema);
