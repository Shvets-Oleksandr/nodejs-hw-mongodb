import Joi from 'joi';

import { typeList } from '../constants/contacts.js';

import { createStringProperty } from '../utils/joiStringProperty.js';

export const contactAddSchema = Joi.object({
  name: createStringProperty('name', true),
  phoneNumber: createStringProperty('phoneNumber', true),
  email: createStringProperty('email'),
  isFavourite: Joi.boolean().default(false),
  contactType: createStringProperty('contactType')
    .valid(...typeList)
    .default('personal'),
});

export const contactPatchSchema = Joi.object({
  name: createStringProperty('name'),
  phoneNumber: createStringProperty('phoneNumber'),
  email: createStringProperty('email'),
  isFavourite: Joi.boolean().default(false),
  contactType: createStringProperty('contactType')
    .valid(...typeList)
    .default('personal'),
});
