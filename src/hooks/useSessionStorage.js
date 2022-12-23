import { useDebugValue } from "react";
import { useEffect, useState } from "react";
import { upperFirst } from "../helpers/functions";

export const useSessionStorage = (key) => {
  const [state, setState] = useState(
    JSON.parse(sessionStorage.getItem(`${key}`)) || []
  );

  useDebugValue(upperFirst(key));

  useEffect(() => {
    sessionStorage.setItem(`${key}`, JSON.stringify(state));
  }, [state]);

  return [state, setState];
};
