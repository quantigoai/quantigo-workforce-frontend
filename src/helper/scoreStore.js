/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/helper/scoreStore.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Friday, March 10th 2023, 12:20:48 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

export const calculateProgress = (courseChapters) => {
  let totalChapters = courseChapters?.length;
  if (!totalChapters) {
    return 0;
  }
  let completedChapters = 0;

  courseChapters.forEach((chapter) => {
    if (chapter.scoreAverage > 70) {
      completedChapters++;
    }
  });
  return Math.round((completedChapters / totalChapters) * 100);
};
