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

const useToaster = () => {
  const trigger = (message, type) => {
    toast[type](message);
  };

  const responsePromise = async (fetch) => {
    console.log("🚀 ~ file: useToaster.js:24 ~ useToaster ~ fetch:", fetch);
    return;
  };

  return { trigger, responsePromise };
};

export default useToaster;
