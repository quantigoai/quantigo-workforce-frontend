import { Box, Grid } from "@mui/material";
import { useEffect } from "react";

import useChapterUpdateManage from "../../Course/hooks/CourseChapter/useChapterUpdateManage";
import FormProvider from "../../../shared/FormProvider/FormProvider";
import ChapterUpdateHeader from "../components/Chapter/ChapterUpdateHeader";
import ChapterDIsableNoFIeld from "../components/Chapter/ChapterDIsableNoFIeld";
import ChapterField from "../components/Chapter/ChapterField";
import ChapterDescriptionField from "../components/Chapter/ChapterDescriptionField";
import ContentField from "../components/Chapter/ContentField";

const UpdateChapterPage = () => {
  const {
    methods,
    handleSubmit,
    onSubmit,
    durationTime,
    setDurationTime,
    activeChapterIndex,
    courseChapter,
    uploadPlugin,
    setContent,
    courseChapters,
  } = useChapterUpdateManage();

  useEffect(() => {
    const duration = courseChapters?.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.estimatedTimeToRead || 0;
    }, 0);
    const hours = Math.floor(duration / 60) || 0;
    const minutes = duration % 60 || 0;
    if (hours === 0) {
      if (minutes === 0) {
        setDurationTime(minutes + " minute");
      } else {
        setDurationTime(minutes + " minutes");
      }
    } else {
      setDurationTime(hours + " hours " + minutes + " minutes");
    }

    // navigate(`/course-details/${course._id}/index`);
  }, []);

  return (
    <Box className='content' sx={{ backgroundColor: "neutral.N000" }}>
      <Grid container sx={{ borderTop: "1px solid #E6ECF5", paddingTop: "1%" }}>
        <Grid xs={2}></Grid>
        <Grid xs={8}>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Box className=''>
                <ChapterUpdateHeader isEditChapter={true} durationTime={durationTime} />
            </Box>

            <Box
              sx={{
                height: "85%",
                
                width: "100%",
                pt: 2,
                
              }}
            >
              <Box
                sx={{
              
                  height: { lg: "73vh", xl: "74vh", xxl: "78vh" },
                  overflowY: "auto  ",
                  "&::-webkit-scrollbar": {
                    width: "0",
                  },
                 
                }}
              >
                <Grid container sx={{ width: "100%" }}>
                  <Grid item xs={4} sx={{ paddingRight: "1%" }}>
                    {" "}
                    <ChapterDIsableNoFIeld
                      name='ChapterNo'
                      label='Chapter No'
                      isRequired={false}
                      defaultValue={activeChapterIndex + 1}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    sx={{
                      paddingRight: "1%",
                      height: {
                        lg: "60px",
                        xl: "72px",
                        xxl: "70px",
                      },
                    }}
                  >
                    

                    <ChapterField
                      name='title'
                      label='Chapter Title'
                      isRequired={true}
                      defaultValue={courseChapter.title}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    sx={{
                      height: {
                        lg: "60px",
                        xl: "72px",
                        xxl: "70px",
                      },
                    }}
                  >
                    {" "}
                    <ChapterField
                      name='estimatedTimeToRead'
                      label='Estimated Time to Read (Minutes)'
                      isRequired={true}
                      defaultValue={courseChapter.estimatedTimeToRead}
                      isNumber={true}
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  sx={{
                    width: "100%",
                    height: {
                      lg: "110px",
                      xl: "120px",
                      xxl: "125px",
                    },
                  }}
                >
                  <Grid xs={12} sx={{ mt: 3 }}>
                    <ChapterDescriptionField
                      name='description'
                      label='Chapter Description'
                      isRequired={true}
                      defaultValue={courseChapter.description}
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12} sx={{ py: 5, backgroundColor: "" }}>
                  <ContentField
                    //  course={course}
                    courseChapter={courseChapter}
                    uploadPlugin={uploadPlugin}
                    setContent={setContent}
                  />{" "}
                </Grid>
              </Box>
            </Box>
          </FormProvider>
        </Grid>
        <Grid xs={2}></Grid>
      </Grid>
    </Box>
  );
};

export default UpdateChapterPage;
