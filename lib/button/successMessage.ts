import { useState } from "react";

export const useSuccess = (delay?: number) => {
  const [message, setMessage] = useState<string | null | undefined>(null);
  function success(message?: string) {
    setMessage(message);
    setTimeout(() => {
      setMessage(null);
    }, delay || 2500);
  }

  return {
    success,
    message,
  };
};
