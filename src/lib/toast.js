import toast from "react-hot-toast";

export const toastSuccess = (message) => {
  toast.success(message, {
    duration: 3000,
    position: "top-center"
  });
};

export const toastError = (message) => {
  toast.error(message, {
    duration: 3000,
    position: "top-center"
  });
};
