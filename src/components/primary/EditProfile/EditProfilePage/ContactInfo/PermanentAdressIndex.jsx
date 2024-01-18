import {Checkbox, FormControlLabel, Grid, Typography} from "@mui/material";
import React from "react";
import FieldForProfile from "../FieldForProfile";

const PermanentAdressIndex = ({ editAble }) => {
  return (
    <>
      <Grid container sx={{ paddingTop: "2%", paddingBottom: "0%" }}>
        <Typography sx={{ color: "primary.B200" }} variant="wpf_p4_medium">
          Permanent Address
        </Typography>
      </Grid>
      <Grid container>
        <FormControlLabel
          control={<Checkbox />}
          label={
            <Typography
              sx={{
                color: "neutral.N300",

                // mb: 1,
              }}
              variant="wpf_p4_medium"
            >
              Same as Present Address{" "}
            </Typography>
          }
        />
      </Grid>

      <Grid container sx={{ paddingBottom: "20px" }}>
        <Grid item xs={6} sx={{ paddingRight: "2%" }}>
          <FieldForProfile
            name="presentAddress"
            label={"District"}
            //   defaultValue={presentAddress}
            disableItem={false}
            //   handleChange={handlePresentAddressChange}
            editAble={editAble}
          />
        </Grid>
        <Grid item xs={6}>
          <FieldForProfile
            name="presentAddress"
            label={"Subdistrict"}
            //   defaultValue={presentAddress}
            disableItem={false}
            //   handleChange={handlePresentAddressChange}
            editAble={editAble}
          />
        </Grid>
      </Grid>
      <Grid container sx={{ paddingBottom: "20px" }}>
        <Grid item xs={6} sx={{ paddingRight: "2%" }}>
          <FieldForProfile
            name="presentAddress"
            label={"Postal Code"}
            //   defaultValue={presentAddress}
            disableItem={false}
            //   handleChange={handlePresentAddressChange}
            editAble={editAble}
          />
        </Grid>
        <Grid item xs={6}>
          <FieldForProfile
            name="presentAddress"
            label={"Area"}
            //   defaultValue={presentAddress}
            disableItem={false}
            //   handleChange={handlePresentAddressChange}
            editAble={editAble}
          />
        </Grid>
      </Grid>
      <Grid container sx={{ paddingBottom: "20px" }}>
        <Grid item xs={6} sx={{ paddingRight: "2%" }}>
          <FieldForProfile
            name="presentAddress"
            label={"Road Number"}
            //   defaultValue={presentAddress}
            disableItem={false}
            //   handleChange={handlePresentAddressChange}
            editAble={editAble}
          />
        </Grid>
        <Grid item xs={6}>
          <FieldForProfile
            name="presentAddress"
            label={"House Number"}
            //   defaultValue={presentAddress}
            disableItem={false}
            //   handleChange={handlePresentAddressChange}
            editAble={editAble}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default PermanentAdressIndex;
