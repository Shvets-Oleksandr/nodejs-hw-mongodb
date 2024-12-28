import Joi from 'joi';

import { typeList } from '../constants/contacts.js';
import { minLengthString, maxLengthString } from '../constants/contacts.js';

const createStringProperty = (key, isRequired = false) => {
  let property = Joi.string()
    .min(minLengthString)
    .max(maxLengthString)
    .messages({
      'string.min': `The "${key}" must be at least ${minLengthString} characters long`,
      'string.max': `The "${key}" cannot exceed ${maxLengthString} characters`,
    });

  if (isRequired) {
    property = property.required();
  }

  return property;
};

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
