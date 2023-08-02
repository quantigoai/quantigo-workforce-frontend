import { Box, Grid } from '@mui/material';
import CommonHeader from "../../shared/CustomComponenet/CommonHeader/CommonHeader";
const ProjectLIstIndex2 = () => {
    return (
       <>
       <>
       <Box
          sx={{
            display: "flex",
            mb: "2%",
          }}
        >
          <Grid
            container
            sx={{
              paddingBottom: "0%",
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <CommonHeader title="Projects" customButton="Create User" />
          </Grid>
        </Box>
       </>
       </>
    );
};

export default ProjectLIstIndex2;