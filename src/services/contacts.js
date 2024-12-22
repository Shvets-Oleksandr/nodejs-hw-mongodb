import { ContactColection } from '../db/models/Contacts.js';

export const getContacts = () => ContactColection.find();

export const getContactById = (id) => ContactColection.findById(id);

export const createContact = (payload) => ContactColection.create(payload);

export const updateContact = async (id, payload) => {
  const result = await ContactColection.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const deleteContact = (filter) =>
  ContactColection.findOneAndDelete({ _id: filter });
