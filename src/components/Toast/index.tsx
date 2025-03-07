import { useEffect } from "react";
import { useToast } from "../../contexts/globalContext";

export const Toast = () => {
  const [toast, setToastState] = useToast();
  useEffect(() => {
    if (!toast.show) {
      return;
    }
    const timer = setTimeout(() => {
      setToastState({ show: false, message: "Message", type: "info" });
    }, 3000);
    return () => clearTimeout(timer);
  }, [toast.show, setToastState]);

  if (!toast.show) {
    return;
  }
  const mapper = {
    error: "alert-danger",
    info: "alert-info",
    success: "alert-success",
    warning: "alert-warning",
  };
  return (
    <div className="toast toast-end">
      <div className={`alert ${mapper[toast?.type ?? "info"]}`} role="alert">
        <span>{toast.message}</span>
      </div>
    </div>
  );
};
