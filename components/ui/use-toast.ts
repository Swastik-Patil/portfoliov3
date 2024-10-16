import { useState, useEffect, useCallback } from "react";

export interface ToastProps {
  title?: string;
  description?: string;
  action?: React.ReactNode;
  duration?: number;
}

export function useToast() {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const toast = useCallback(
    ({ title, description, action, duration = 5000 }: ToastProps) => {
      setToasts((currentToasts) => [
        ...currentToasts,
        { title, description, action, duration },
      ]);
    },
    []
  );

  const dismissToast = useCallback((index: number) => {
    setToasts((currentToasts) => currentToasts.filter((_, i) => i !== index));
  }, []);

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(() => {
        dismissToast(0);
      }, toasts[0].duration);

      return () => clearTimeout(timer);
    }
  }, [toasts, dismissToast]);

  return { toast, toasts, dismissToast };
}
