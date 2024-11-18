import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  const contacts = [];
  const data = JSON.stringify(contacts, null, 2);
  await writeContacts(data);
};

removeAllContacts();
