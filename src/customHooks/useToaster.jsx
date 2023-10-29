/*
 * File           : useToaster.js
 * Project        : wmpfrontv2
 * Created Date   : Tu 10 Oct 2023 02:17:58
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Tue Oct 10 2023
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */

import { toast } from "react-toastify";
import ErrorToaster from "../components/shared/Toaster/ErrorToaster";
import SuccessToaster from "../components/shared/Toaster/SuccessToaster";

const useToaster = () => {
  const trigger = (message, type) => {
    if (type === "success") {
      toast(<SuccessToaster message={message} />, {
        className: "success-toast-background",
        progressClassName: "success-progress-bar",
      });
    }
    if (type === "error") {
      toast(<ErrorToaster message={message} />, {
        className: "error-toast-background",
        progressClassName: "error-progress-bar",
      });
    }
  };

  const responsePromise = async (request, { initialMessage = "Loading...", afterSuccess }) => {
    await toast.promise(request, {
      pending: {
        render() {
          return `${initialMessage}`;
        },
        icon: true,
      },
      success: {
        render({ data }) {
          afterSuccess(data);
          return `${data.data.message}`;
        },
        icon: "🤙",
      },
      error: {
        render({ data }) {
          return data.response.data.message;
        },
      },
    });
  };

  const comp = (type) => {
    if (type === "success") {
      return toast(<h1>Success</h1>);
    } else {
      return toast(<h2>err</h2>);
    }
  };

  return {
    trigger,
    responsePromise,
    comp,
  };
};

export default useToaster;
