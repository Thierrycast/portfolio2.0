import { toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";

export  function ToastError(message:string) {
    injectStyle();
    return toast.error(message, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "dark",
        style: {fontSize: "1.4rem" },
    });
}

export  function ToastSuccess(message:string) {
    injectStyle();
    return toast.success(message, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        style: {fontSize: "1.4rem" },
    });
}