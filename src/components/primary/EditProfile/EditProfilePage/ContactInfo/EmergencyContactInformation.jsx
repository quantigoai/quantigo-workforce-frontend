import { Checkbox, FormControlLabel, Grid, Typography } from "@mui/material";
import React from "react";
import FieldForProfile from "../FieldForProfile";

const EmergencyContactInformation = ({editAble}) => {
  return (
    <>
      <Grid container sx={{ paddingTop: "2%", paddingBottom: "1%" }}>
        <Typography sx={{ color: "primary.B200" }} variant="wpf_p4_medium">
          Emergency Contact Information
        </Typography>
      </Grid>

      <Grid container sx={{ paddingBottom: "20px" }}>
        <Grid item xs={6} sx={{ paddingRight: "2%" }}>
          <FieldForProfile
            name="presentAddress"
            label={"Name of Contact Person"}
            //   defaultValue={presentAddress}
            disableItem={false}
            //   handleChange={handlePresentAddressChange}
            editAble={editAble}
          />
        </Grid>
        <Grid item xs={6}>
          <FieldForProfile
            name="presentAddress"
            label={"Relationship"}
            //   defaultValue={presentAddress}
            disableItem={false}
            //   handleChange={handlePresentAddressChange}
            editAble={editAble}
          />
        </Grid>
      </Grid>
      <Grid container sx={{ paddingBottom: "20px" }}>
        <Grid item xs={12} sx={{ paddingRight: "0%" }}>
          <FieldForProfile
            name="presentAddress"
            label={"Mobile Number"}
            //   defaultValue={presentAddress}
            disableItem={false}
            //   handleChange={handlePresentAddressChange}
            editAble={editAble}
          />
        </Grid>
        {/* <Grid item xs={6}>
                    <FieldForProfile
                      name="presentAddress"
                      label={"Address"}
                      //   defaultValue={presentAddress}
                      disableItem={false}
                      //   handleChange={handlePresentAddressChange}
                      editAble={editAble}
                    />
                  </Grid> */}
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

export default EmergencyContactInformation;
