import { Box, Button, Container, Grid, TextField } from "@material-ui/core";
import { Dispatch, SetStateAction } from "react";
import { ParamsInput } from "./ClassicWizard";

export const ParametersComponent = ({
  paramsInfo,
  setParam,
  addParams,
  index
} : {
  paramsInfo: ParamsInput,
  setParam: (value: ParamsInput, index: number) => void,
  addParams: () => void,
  index: number
})  => {

  return <Container>
    <Grid container spacing={2}>
      <Grid item sm={11} md={2}>
        <TextField
          required
          onChange={(e) => setParam({...paramsInfo, name: e.target.value}, index)}
          type="text"
          label="Name"
          variant="outlined"
        />
      </Grid>
      <Grid item sm={12} md={2}>
        <TextField
          type="text"
          onChange={(e) => setParam({...paramsInfo, description: e.target.value}, index)}
          label="Description"
          variant="outlined"
        />
      </Grid>
      <Grid item sm={12} md={2}>
        <TextField
          type="text"
          required
          onChange={(e) => setParam({...paramsInfo, type: e.target.value}, index)}
          label="Type"
          variant="outlined"
        />
      </Grid>
      <Grid item sm={12} md={2}>
        <TextField
          type="text"
          required
          onChange={(e) => setParam({...paramsInfo, unit: e.target.value}, index)}
          label="Unit"
          variant="outlined"
        />
      </Grid>
      <Grid item sm={12} md={1}>
        <TextField
          type="text"
          onChange={(e) => setParam({...paramsInfo, min: Number(e.target.value)}, index)}
          label="Min"
          variant="outlined"
        />
      </Grid>
      <Grid item sm={12} md={1}>
        <TextField
          type="text"
          onChange={(e) => setParam({...paramsInfo, max: Number(e.target.value)}, index)}
          label="Max"
          variant="outlined"
        />
      </Grid>
      <Grid item sm={12} md={1}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={() => {addParams();}}>
            Add
          </Button>
        </Box>
      </Grid>
    </Grid>
  </Container>
}