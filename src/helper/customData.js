/*
 * File           : customData.js
 * Project        : wmpv2
 * Created Date   : Fr 30 Dec 2022 01:22:48
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Fri Dec 30 2022
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */

export const convertDate = (date) => {
    if (date) {
        const cDate = new Date(date["$d"]);
        const currentDate = cDate && new Date(cDate)?.setHours(6);
        const newDate = currentDate && new Date(currentDate)?.toISOString();
        // return newDate || "2000-01-01T00:00:00.000Z";
        return newDate;
    }
};

export const labelsData = (idCollection, primaryDataset, secondaryDataset) => {
    return [...idCollection].map((id) => {
        // if (primaryDataset[id]) {
        //   return `${primaryDataset[id].teamName}/${primaryDataset[id].projectName}`;
        // } else {
        //   return `${secondaryDataset[id].teamName}/${secondaryDataset[id].projectName}`;
        // }
        if (primaryDataset[id]) {
            return `${primaryDataset[id].teamName}`;
        } else {
            return `${secondaryDataset[id].teamName}`;
        }
    });
};

export const chartValues = (idCollection, primaryDataset, secondaryDataset) => {
    const activeJobValues = [];
    const blockedJobValues = [];

    idCollection.forEach((id) => {
        if (primaryDataset[id]) {
            activeJobValues.push(primaryDataset[id].item);
        } else {
            activeJobValues.push(0);
        }
        if (secondaryDataset[id]) {
            blockedJobValues.push(secondaryDataset[id].item);
        } else {
            blockedJobValues.push(0);
        }
    });

    return {activeJobValues, blockedJobValues};
};
