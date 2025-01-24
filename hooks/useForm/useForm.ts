import { useState, type ChangeEvent } from "react";

type FormValues = {
  [key: string]: any;
};

type UseFormReturn<T> = [
  T,
  (e: ChangeEvent<HTMLInputElement>) => void,
  () => void
];

export const useForm = <T extends FormValues>(
  initialState: T
): UseFormReturn<T> => {
  const [values, setValues] = useState<T>(initialState);

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return [values, handleInputChange, reset];
};
