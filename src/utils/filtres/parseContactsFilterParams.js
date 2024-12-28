import { typeList } from '../../constants/contacts.js';

const praseContactType = (contactType) => {
  const isString = typeof contactType === 'string';
  if (!isString) return;
  const isContactType = (contactType) => typeList.includes(contactType);

  if (isContactType(contactType)) return contactType;
};

const praseIsFavourite = (isFavourite) => {
  const isString = typeof isFavourite === 'string';
  if (!isString) return;
  if (isFavourite === 'true') return true;
  if (isFavourite === 'false') return false;
  return;
};

export const parseFilterParams = (query) => {
  const { contactType, isFavourite } = query;

  const parsedContactType = praseContactType(contactType);
  const parsedIsFavourite = praseIsFavourite(isFavourite);

  return {
    contactType: parsedContactType,
    isFavourite: parsedIsFavourite,
  };
};
