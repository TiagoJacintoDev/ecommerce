import { useEffect, useState } from 'react';

export const useLocalStorage = () => {
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem('state')) || []
  );

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state));
  }, [state]);

  return [state, setState];
};
