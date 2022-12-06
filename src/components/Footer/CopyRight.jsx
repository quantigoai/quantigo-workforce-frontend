import React from 'react';
import {Box, Grid, Typography} from "@mui/material";

const CopyRight = () => {
    return (
        <>
            <br/>
            <Box sx={{px : "10%"}}>
            <hr />
            </Box>

            <Grid sx={{display :"flex", justifyContent : "space-around"}} container>
                <Grid>
                    <Typography variant={"body2"} align={"center"} color={"text.secondary"} paragraph>Copyright © 2022 Quantigo AI. All rights reserved.</Typography>
                </Grid>
                <Grid>
                    <Typography variant={"body2"} align={"center"} color={"text.secondary"} paragraph>Privacy Policy
                    </Typography>
                </Grid>
            </Grid>

        </>
    );
};

export default CopyRight;
