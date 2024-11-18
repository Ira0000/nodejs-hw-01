import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const contacts = await readContacts();
  if (contacts.length > 0) {
    contacts.splice(-1, 1);
    const data = JSON.stringify(contacts, null, 2);
    await writeContacts(data);
  }
};

removeLastContact();
