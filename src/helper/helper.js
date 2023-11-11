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

  arr1.sort();
  arr2.sort();

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};
