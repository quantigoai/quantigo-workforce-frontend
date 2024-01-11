import { Box, Grid, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const AddressField = ({ ItemTitle, Item }) => {
  console.log("🚀 ~ AddressField ~ Item:", Item)
  const { isLightTheme } = useSelector((state) => state.theme);
  return (
    <>
      <Stack sx={{ borderBottom: "1px solid #E6ECF5" }}>
        <Grid container>
          <Grid item xs={12} sx={{ padding: "2%" }}>
            <Grid container>
              <Typography
                variant="wpf_h8_regular"
                sx={{ color: isLightTheme ? "#091E42" : "#fff", opacity: isLightTheme && "0.7", fontWeight: "400" }}
              >
                {ItemTitle}
              </Typography>
            </Grid>

            <Typography variant="wpf_p3_medium" sx={{ color: isLightTheme ? "#091E42" : "#fff", fontWeight: "500" }}>
              {Item?.roadNo ? `Road No : ${Item?.roadNo}, ` : ""}
              {Item?.houseNo ? `House No : ${Item.houseNo}, ` : ""}
              {Item?.area ? `City: ${Item.area}, ` : ""}
            </Typography>
            <br/>
            <Typography variant="wpf_p3_medium" sx={{ color: isLightTheme ? "#091E42" : "#fff", fontWeight: "500" }}>   
              {Item?.subdistrict?.name ? ` Sub-district : ${Item.subdistrict.name}, ` : ""}
              {Item?.district?.name ? `District : ${Item.district.name}, ` : ""}
              {Item?.division?.name ? `Division : ${Item.division.name} ` : ""}
            </Typography>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};

export default AddressField;
