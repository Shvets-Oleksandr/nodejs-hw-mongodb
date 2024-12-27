import { ContactColection } from '../db/models/Contacts.js';
import { calcPaginationData } from '../utils/calcPaginationData.js';

export const getContacts = async ({ page = 1, perPage = 10 }) => {
  const limit = perPage;
  const skip = (page - 1) * limit;
  const data = await ContactColection.find().skip(skip).limit(limit);
  const totalItems = await ContactColection.countDocuments();

  const paginationData = calcPaginationData({ totalItems, page, perPage });

  return {
    data,
    page,
    perPage,
    totalItems,
    ...paginationData,
  };
};

export const getContactById = (id) => ContactColection.findById(id);

export const createContact = (payload) => ContactColection.create(payload);

export const updateContact = async (id, payload) => {
  const result = await ContactColection.findOneAndUpdate({ _id: id }, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

export const deleteContact = (filter) =>
  ContactColection.findOneAndDelete({ _id: filter });
