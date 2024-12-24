import Joi from 'joi';

export const createStringProperty = (key, isRequired = false) => {
  let property = Joi.string()
    .min(3)
    .max(20)
    .messages({
      'string.min': `The "${key}" must be minimum 3 characters`,
      'string.max': `The "${key}" must be maximum 20 characters`,
    });

  if (isRequired) {
    property = property.required();
  }

  return property;
};
