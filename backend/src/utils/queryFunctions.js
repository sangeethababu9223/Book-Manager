import debug from 'debug';
import '../models/connect';

import { BookLists } from '../models/booklists';

const logger = debug('dev');

const data = [
  { title: 'The Palace of Illusions', author: 'Chitra Banerjee Divakaruni', category : 'Mythology', ISBN: '0330458531', blurb : 'The Palace of Illusions takes us back to a time that is half-history, half-myth, and wholly magical; narrated by Panchaali, the wife of the five Pandava brothers, we are - finally - given a woman\'s take on the timeless tale that is the Mahabharata'},
  { title: 'The Priory of the Orange Tree', author: 'Samantha Shannon', category : 'Fantasy', ISBN: 'ksjfhjf87767', blurb : 'The Priory of the Orange Tree is a 2019 fantasy novel by writer Samantha Shannon. Samantha Shannon describes her novel as a "feminist retelling of Saint George and the Dragon".'},
];

export const createData = async () => new Promise(resolve => {
  const stop = data.length;

  data.forEach(async (d, index) => {
    const { title, author, category, ISBN, blurb } = d;
    const m = BookLists({ title, author, category, ISBN, blurb });
    try {
      await m.save();
    } catch (err) {
      logger(`error: ${err.message}`);
    }

    if (index + 1 === stop) resolve();
  });
});

export const deleteData = async () => new Promise(resolve => {
  const stop = data.length;
  data.forEach(async (d, index) => {
    const { book } = d;
    try {
      await BookLists.deleteOne({ book });
    } catch (err) {
      logger(`error: ${err.message}`);
    }

    if (index + 1 === stop) resolve();
  });
});
