import { useState } from "react";

export const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = ({ target }) => {
    setValue(target.value);
  };

  return { value, onChange };
};
