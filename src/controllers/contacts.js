import * as contactServiсes from '../services/contacts.js';

export const getContactsController = async (req, res) => {
  const contacts = await contactServiсes.getContacts();
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
    res.status(404).json({
      message: 'Contact not found',
    });
    return;
  }

  res.status(200).json({
    status: 200,
    message: `Successfully found contact with id ${contactId}!`,
    data: contact,
  });
};
