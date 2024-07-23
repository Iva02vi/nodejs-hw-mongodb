import { Router } from "express";
import { createContactController, deleteContactController, getAllContactsController, getContactByIdController, patchContactController } from "../controllers/contacts.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { validateBody } from "../middlewares/validateBody.js";
import { createContactSchema, updateContactSchema } from "../validation/contacts.js";
import { isValidId } from "../middlewares/isValidId.js";

export const contactRouter = Router();

contactRouter.get('/', ctrlWrapper(getAllContactsController));

contactRouter.get('/:contactId', isValidId, ctrlWrapper(getContactByIdController));

contactRouter.post('/', validateBody(createContactSchema), ctrlWrapper(createContactController));

contactRouter.patch('/:contactId', isValidId, validateBody(updateContactSchema), ctrlWrapper(patchContactController));

contactRouter.delete('/:contactId', isValidId, ctrlWrapper(deleteContactController));
