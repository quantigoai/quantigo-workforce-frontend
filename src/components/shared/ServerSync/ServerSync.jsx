/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/shared/ServerSync/ServerSync.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Thursday, March 30th 2023, 12:55:38 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { setActivePath } from "../../../features/slice/activePathSlice";
import { resetUpdatedValue, syncATeam } from "../../../features/slice/syncServerSlice";
import { getAllTeams, resetTeams } from "../../../features/slice/teamSlice";
import CommonHeader from "../CustomComponenet/CommonHeader/CommonHeader";
import Teams from "../SPV/Teams";
import ServerSyncBody from "./ServerSyncBody";

const ServerSync = () => {
  const dispatch = useDispatch();
  const { teams } = useSelector((state) => state.team);
  const [server, setServer] = useState("ag");
  const [team, setTeam] = useState("");
  const [teamId, setTeamId] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const alert = useAlert();

  const { updatedValue } = useSelector((state) => state.serverSync);
  useEffect(() => {
    dispatch(setActivePath("Sync Server"));
  }, []);

  const handleChangeTeam = (e) => {
    const data = {
      id: e.target.value,
      server_agent: server,
    };
    setTeam(e.target.value);
    setTeamId("");
  };
  const handleTeamId = (e) => {
    setIsDisabled(true);
    const data = {
      id: e.target.value,
      server_agent: server,
    };
    setTeamId(e.target.value);
  };

  useEffect(() => {
    dispatch(getAllTeams({ server_agent: server }));
  }, [server]);

  const handleChangeServer = (e) => {
    setServer(e.target.value);
  };
  const handleClear = () => {
    dispatch(resetUpdatedValue());
    dispatch(resetTeams());
    setTeam("");
    setTeamId("");
    setIsDisabled(false);

    dispatch(getAllTeams({ server_agent: server }));
  };

  const handleSync = () => {
    const data = {
      server_agent: server,
      teamId: team || teamId,
    };
    if (server && (team || teamId)) {
      handleClear();
      dispatch(syncATeam(data)).then((action) => {
        if (action.payload.status === 200) {
          alert.show("Team Sync Successfully", { type: "success" });
        } else {
          alert.show(action.payload.message, { type: "error" });
        }
      });
    } else {
      alert.show("Please select a team or team ID", { type: "error" });
    }
  };

  return (
    <>
      <Grid container sx={{ paddingBottom: "2%" }}>
        <CommonHeader title="Sync Server" description="Sync Server based on the server agent" customButton={"null"} />
      </Grid>
      <Paper elevation={0}>
        <Grid
          container
          spacing={0}
          sx={{
            paddingTop: "1%",
            paddingBottom: "1%",
            paddingLeft: "2%",
            paddingRight: "2%",
          }}
        >
          {/* server Field */}
          <Grid item xs={4} sx={{ pr: 2 }}>
            <FormControl
              variant="filled"
              fullWidth
              sx={{
                backgroundColor: "#F8F8F8",
              }}
            >
              <InputLabel id="demo-simple-select-filled-label">Server</InputLabel>
              <Select labelId="demo-simple-select-filled-label" id="demo-simple-select-filled" defaultValue={server} onChange={(e) => handleChangeServer(e)}>
                <MenuItem value={"quantigo"}>Quantigo Server</MenuItem>
                <MenuItem value={"ag"}>Ag Server</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4} sx={{ pr: "1%" }}>
            <Teams isDisabled={isDisabled} teams={teams} handleChangeTeam={handleChangeTeam} />
          </Grid>
          {/* TextField */}
          <Grid item xs={2} sx={{ pr: "1%" }}>
            <TextField
              fullWidth
              // disabled={team}
              variant="filled"
              type="number"
              label="Inset Team ID"
              inputProps={{ min: 0 }}
              id="filled-number"
              InputLabelProps={{
                shrink: true,
              }}
              value={teamId}
              onChange={(e) => handleTeamId(e)}
            />
          </Grid>
          {/* Button  */}
          <Grid item xs={1} pr={1} sx={{ display: "flex" }}>
            <Button fullWidth variant="contained" onClick={handleSync}>
              Start Sync
            </Button>
          </Grid>
          <Grid item xs={1} sx={{ display: "flex" }}>
            <Button onClick={handleClear} fullWidth variant="outlined" color="error">
              Clear
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <ServerSyncBody />
    </>
  );
};

export default ServerSync;
