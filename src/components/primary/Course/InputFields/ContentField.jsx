/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Course/InputFields/ContentField.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Thursday, December 22nd 2022, 12:35:57 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Grid } from "@mui/material";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import React from "react";

const ContentField = ({ courseChapter = {}, uploadPlugin, setContent }) => {
  return (
    <>
      <Grid item xs={12}>
        <CKEditor
          config={{
            extraPlugins: [uploadPlugin],
            mediaEmbed: {
              previewsInData: true,
            },
            image: {
              toolbar: [
                "imageStyle:full",
                "imageStyle:side",
                "|",
                "imageTextAlternative",
                "imageStyle:alignLeft",
                "imageStyle:alignCenter",
                "imageStyle:alignRight",
              ],
              upload: { types: ["jpeg", "jpg", "png", "pdf", "docx"] },
            },
          }}
          editor={Editor}
          data={
            courseChapter?.content
              ? courseChapter.content
              : "<h2>Write your content here</h2>"
          }
          onReady={(editor) => {}}
          onChange={(event, editor) => {
            setContent(editor.getData());
          }}
        />
      </Grid>
    </>
  );
};

export default ContentField;
