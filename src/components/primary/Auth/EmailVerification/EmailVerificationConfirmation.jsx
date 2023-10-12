import {Box, Grid} from "@mui/material";
import {styled} from "@mui/material/styles";
import {lazy, Suspense, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {emailVerificationLink} from "../../../../features/slice/userSlice";
import LoadingComponent from "../../../shared/Loading/LoadingComponent";
import HeaderNav from "../../HomePage/HeaderNav";

const VerificationResult = lazy(() => import("./VerificationResult"));

const EmailVerificationConfirmation = () => {
  const params = useParams();

  const dispatch = useDispatch();
  const [verificationTimeOver, setVerificationTimeOver] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    dispatch(emailVerificationLink(params)).then((action) => {
      if (action.payload?.status === 200) {
        setMessage(action.payload.data.message);
        setVerificationTimeOver(true);
      } else {
        setMessage(action.error?.message);
        setVerificationTimeOver(false);
      }
    });
  }, []);

  const Keyframes = styled("div")({
    height: "100vh",
    width: "100%",
  });

  const { isLoading } = useSelector((state) => state.user);

  return (
    <Box className="container">
      <Keyframes>
        <HeaderNav />
        <Grid container style={{ justifyItems: "center" }}>
          <Grid
            xs={12}
            sm={12}
            md={6}
            lg={6}
            sx={{ paddingTop: "10%", paddingLeft: "35%" }}
          >
            {!isLoading && (
              <Suspense fallback={<LoadingComponent />}>
                <VerificationResult
                  message={message}
                  verificationTimeOver={verificationTimeOver}
                />
              </Suspense>
            )}
          </Grid>
        </Grid>
      </Keyframes>
    </Box>
  );
};

export default EmailVerificationConfirmation;
