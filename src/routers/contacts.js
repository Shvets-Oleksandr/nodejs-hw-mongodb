import express from 'express';

import * as contactsController from '../controllers/contacts.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../utils/validateBody.js';

import {
  contactAddSchema,
  contactPatchSchema,
} from '../validation/contacts.js';

const contactsRouter = express.Router();

contactsRouter.get('/', ctrlWrapper(contactsController.getContactsController));

contactsRouter.get(
  '/:contactId',
  ctrlWrapper(contactsController.getContactByIdController),
);

contactsRouter.post(
  '/',
  validateBody(contactAddSchema),
  ctrlWrapper(contactsController.addContactController),
);

contactsRouter.patch(
  '/:contactId',
  validateBody(contactPatchSchema),
  ctrlWrapper(contactsController.patchContactController),
);

contactsRouter.delete(
  '/:contactId',
  ctrlWrapper(contactsController.deleteContactController),
);

export default contactsRouter;
