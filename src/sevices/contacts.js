import { Contact } from "../db/models/Contact.js";

export const getAllContacts = async () => await Contact.find();

export const getContactById = async (contactId) => await Contact.findById(contactId);

export const createContact = async (data) => await Contact.create(data);

export const updateContact = async (сontactId, payload, options = {}) => {
  const rawResult = await Contact.findOneAndUpdate(
    { _id: сontactId },
    payload,
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
  );

  if (!rawResult || !rawResult.value) return null;

  return {
    сontact: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};

export const deleteContact = async (contactId) => {
  const contact = await Contact.findOneAndDelete({
    _id: contactId,
  });

  return contact;
};
