import { ContactColection } from '../db/models/Contacts.js';

export const getContacts = () => ContactColection.find();

export const getContactById = (id) => ContactColection.findById(id);
