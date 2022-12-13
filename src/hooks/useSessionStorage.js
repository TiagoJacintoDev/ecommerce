import { useEffect, useState } from "react";

export const useSessionStorage = (key) => {
  const [state, setState] = useState(
    JSON.parse(sessionStorage.getItem(`${key}`)) || []
  );

  useEffect(() => {
    sessionStorage.setItem(`${key}`, JSON.stringify(state));
  }, [state]);

  return [state, setState];
};
