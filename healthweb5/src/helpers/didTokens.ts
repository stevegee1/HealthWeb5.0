export const setDid = (did: string) => {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('did', JSON.stringify(did));
  }
};

export const getDid = () => {
  if (typeof window !== 'undefined') {
    return JSON.parse(sessionStorage.getItem('did') || '');
  }
};

export const removeDid = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('did');
  }
};
