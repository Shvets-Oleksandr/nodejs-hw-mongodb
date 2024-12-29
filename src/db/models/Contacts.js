import { Schema, model } from 'mongoose';

import { handleSaveError, setUpdateSettings } from './hooks.js';

import { typeList } from '../../constants/contacts.js';
import { minLengthString, maxLengthString } from '../../constants/contacts.js';

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: [minLengthString],
      maxlength: [maxLengthString],
    },
    phoneNumber: {
      type: String,
      required: true,
      minlength: [minLengthString],
      maxlength: [maxLengthString],
    },
    email: {
      type: String,
      minlength: [minLengthString],
      maxlength: [maxLengthString],
    },
    isFavourite: {
      type: Boolean,
      default: false,
    },
    contactType: {
      type: String,
      enum: typeList,
      default: 'personal',
      required: true,
      minlength: [minLengthString],
      maxlength: [maxLengthString],
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

contactSchema.post('save', handleSaveError);

contactSchema.pre('findOneAndUpdate', setUpdateSettings);

contactSchema.post('findOneAndUpdate', handleSaveError);

export const sortByList = [
  '_id',
  'name',
  'phoneNumber',
  'email',
  'isFavourite',
  'contactType',
];

export const ContactCollection = model('contact', contactSchema);
