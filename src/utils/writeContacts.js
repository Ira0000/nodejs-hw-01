import * as fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    await fs.writeFile(PATH_DB, updatedContacts, 'utf8');
  } catch (err) {
    console.error('Помилка читання файлу:', err);
  }
};
