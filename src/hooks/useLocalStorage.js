import { useEffect, useState } from 'react';

export const useLocalStorage = key => {
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem(`${key}`)) || []
  );

  useEffect(() => {
    localStorage.setItem(`${key}`, JSON.stringify(state));
  }, [state]);

  return [state, setState];
};
