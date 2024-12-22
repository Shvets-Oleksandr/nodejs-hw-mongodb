import HttpError from 'http-errors';

import * as contactServiсes from '../services/contacts.js';

import { parsePaginationParams } from '../utils/parsePaginationParams.js';

export const getContactsController = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const contacts = await contactServiсes.getContacts(page, perPage);
  res.status(200).json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
};

export const getContactByIdController = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await contactServiсes.getContactById(contactId);

  if (!contact) {
    throw HttpError(404, 'Contact not found');
  }

  res.status(200).json({
    status: 200,
    message: `Successfully found contact with id ${contactId}!`,
    data: contact,
  });
};

export const addContactController = async (req, res) => {
  const contact = await contactServiсes.createContact(req.body);
  res.status(201).json({
    status: 201,
    message: 'Successfully created a contact!',
    data: contact,
  });
};

export const patchContactController = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await contactServiсes.updateContact(contactId, req.body);

  if (!result) {
    throw HttpError(404, 'Contact not found');
  }
  res.json({
    status: 200,
    message: 'Successfully patched a contact!',
    data: result,
  });
};

export const deleteContactController = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await contactServiсes.deleteContact(contactId);

  if (!contact) {
    throw HttpError(404, 'Contact not found');
  }

  res.status(204).send();
};
