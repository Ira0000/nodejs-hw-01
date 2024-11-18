import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const contacts = await readContacts();
  let counter = 0;
  for (let i = 0; i < contacts.length; i++) {
    counter = counter + 1;
  }
  return counter;
};

console.log(await countContacts());
