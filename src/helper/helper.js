/*
 * File           : helper.js
 * Project        : wmpfrontv2
 * Created Date   : Tu 07 Nov 2023 12:46:46
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Tue Nov 07 2023
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */
export const arraysAreEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let temp1 = [...arr1];
  let temp2 = [...arr2];
    
  temp1.sort();
  temp2.sort();

  for (let i = 0; i < temp1.length; i++) {
    if (temp1[i] !== temp2[i]) {
      return false;
    }
  }

  return true;
};
