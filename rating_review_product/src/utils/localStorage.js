export const loadFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('review'));

};

export const saveToLocalStorage = data => {
  return localStorage.setItem('review', JSON.stringify(data));
};
