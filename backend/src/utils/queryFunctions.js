import debug from 'debug';
import '../models/connect';

import { BookLists } from '../models/booklists';

const logger = debug('dev');

const data = [
  { title: 'The Palace of Illusions', author: 'Chitra Banerjee Divakaruni', category : 'Mythology', ISBN: '0330458531'},
  { title: 'The Priory of the Orange Tree', author: 'Samantha Shannon', category : 'Fantasy', ISBN: 'ksjfhjf87767'},
];

export const createData = async () => new Promise(resolve => {
  const stop = data.length;

  data.forEach(async (d, index) => {
    const { title, author, category, ISBN } = d;
    const m = BookLists({ title, author, category, ISBN });
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
    const { title } = d;
    try {
      await BookLists.deleteOne({ title });
    } catch (err) {
      logger(`error: ${err.message}`);
    }

    if (index + 1 === stop) resolve();
  });
});
