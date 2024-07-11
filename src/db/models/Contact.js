import { Schema, model } from "mongoose";

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
      required: true,
      default: false,
    },
    contactType: {
      type: String,
      enum: ['work', 'home', 'personal'],
      required: true,
      default: 'personal',
    },
},
    {
        timestamps: true,
        versionKey: false,
    },
)

export const Contact = model("contact", contactShema)
