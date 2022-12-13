import { lowerCase } from './text-formatter';

const filterSearchResults = (list, enteredValue) =>
  list.map(({ title, content }) => {
    return {
      title,
      content: content.filter(({ value }) => lowerCase(value).includes(enteredValue)),
    };
  });

export default filterSearchResults;
