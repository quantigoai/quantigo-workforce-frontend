/*
 * File           : capitalizeFirstWord.js
 * Project        : wmpv2
 * Created Date   : Mo 26 Dec 2022 02:15:32
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Mon Dec 26 2022
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */

export function capitalizeFirstLetter(string) {
    return string?.charAt(0).toUpperCase() + string?.slice(1);
}
