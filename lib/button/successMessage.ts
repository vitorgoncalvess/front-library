import { useState } from "react";

export const useSuccessMessage = (delay?: number) => {
  const [message, setMessage] = useState("");
  function success(message: string) {
    setMessage(message);
    setTimeout(() => {
      setMessage("");
    }, delay || 2500);
  }

  return {
    success,
    message,
  };
};
