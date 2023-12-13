export const convertString = (word: string, type: string = 'snake') => {
  if (type === 'snake') return word.split(' ').join('_');
  return word.split('_').join(' ');
};
