import Joi from 'joi';

import { minLengthString, maxLengthString } from '../constants/contacts.js';

export const createStringProperty = (key, isRequired = false) => {
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
