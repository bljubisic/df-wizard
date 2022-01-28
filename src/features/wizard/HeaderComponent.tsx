import { Container, Grid, MenuItem, Select, TextField } from "@material-ui/core"
import { Dispatch, SetStateAction, useState } from "react"
import { HeaderInput } from "./ClassicWizard"


export const HeaderComponent = ({headerInfo, setHeader} : {headerInfo: HeaderInput, setHeader: Dispatch<SetStateAction<HeaderInput | undefined>>}) => {

  return <Container>
    <Grid container spacing={2}>
      <Grid item sm={10} md={2}>
        <TextField
          required
          onChange={(e) => setHeader({...headerInfo, modelName: e.target.value})}
          type="text"
          label="Model Name"
          variant="outlined"
        />
      </Grid>
      <Grid item sm={10} md={2}>
        <TextField
          type="text"
          onChange={(e) => setHeader({...headerInfo, modelDescription: e.target.value})}
          label="Model Description"
          variant="outlined"
        />
      </Grid>
      <Grid item sm={10} md={2}>
        <TextField
          type="text"
          onChange={(e) => setHeader({...headerInfo, modelProject: e.target.value})}
          label="Project"
          variant="outlined"
        />
      </Grid>
      <Grid item sm={10} md={2}>
        <TextField
          type="text"
          onChange={(e) => setHeader({...headerInfo, modelType: e.target.value})}
          label="Type"
          variant="outlined"
        />
      </Grid>
      <Grid item sm={10} md={2}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={headerInfo ? headerInfo.modelNumber : 1}
          label="Age"
          onChange={(e) => setHeader({...headerInfo, modelNumber: Number(e.target.value)})}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
      </Grid>
    </Grid>
  </Container>
}