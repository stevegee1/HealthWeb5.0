export const setDid = (did: string) => {
  sessionStorage.setItem('did', JSON.stringify(did));
};

export const getDid = () => {
  return JSON.parse(sessionStorage.getItem('did') || '');
};

export const removeDid = () => {
  localStorage.removeItem('did');
};
