import {FormControl, Grid, InputLabel, MenuItem} from '@mui/material'
import React from 'react'

const JobFilter = () => {
  return (
    <>
    <Grid>
    <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Team</InputLabel>
          {teams.length > 0 && (
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={(e) => handleChangeTeam(e)}
              label="Team"
            >
              {teams.map((team) => (
                <MenuItem key={team.id} value={team.id}>
                  {team.name}
                </MenuItem>
              ))}
            </Select>
          )}
        </FormControl>
    </Grid>
    </>
  )
}

export default JobFilter