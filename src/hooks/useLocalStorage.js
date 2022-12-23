import { useDebugValue } from "react";
import { useEffect, useState } from "react";
import { upperFirst } from "../helpers/functions";

export const useLocalStorage = (key) => {
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem(`${key}`)) || []
  );
  useDebugValue(upperFirst(key));

  useEffect(() => {
    localStorage.setItem(`${key}`, JSON.stringify(state));
  }, [state]);

  return [state, setState];
};
