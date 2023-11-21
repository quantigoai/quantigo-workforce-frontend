/*
 * File           : dataBuilder.js
 * Project        : wmpfrontv2
 * Created Date   : Sa 05 Aug 2023 01:46:44
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Sat Aug 05 2023
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */

const dataBuilder = (data) => {
    const newRows = data?.map((d, index) => {
        return {...d, id: d._id};
    });
    return newRows;
};

export default dataBuilder;
