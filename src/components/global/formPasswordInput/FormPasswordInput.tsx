'use client';

import { ReactElement, ReactNode, cloneElement, useState } from 'react';

type FormPasswordInputProps = {
  children: ReactNode;
};

function FormPasswordInput({ children }: FormPasswordInputProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const updatedInput = cloneElement(children as ReactElement, {
    password: { isVisible, setIsVisible: () => setIsVisible((prev) => !prev) },
  });
  return updatedInput;
}

export default FormPasswordInput;
