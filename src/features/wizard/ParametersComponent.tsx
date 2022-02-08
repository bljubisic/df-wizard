import { ThemeProvider } from "@emotion/react";
import { Box, Button, Container, Grid, TextField } from "@mui/material";
import theme from "../../theme";
import { ParamsInput } from "../../types/Types";

export const ParametersComponent = ({
  paramsInfo,
  setParam,
  addParams,
  index
} : {
  paramsInfo: ParamsInput,
  setParam: (value: ParamsInput, index: number) => void,
  addParams: () => void,
  index: number,
})  => {

  return <ThemeProvider theme={theme}>
    <Container sx={{mt: 1}}>
      <Grid container spacing={2} columns={14}>
        <Grid item xs>
          <TextField
            required
            onChange={(e) => setParam({...paramsInfo, name: e.target.value}, index)}
            type="text"
            label="Name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            type="text"
            onChange={(e) => setParam({...paramsInfo, description: e.target.value}, index)}
            label="Description"
            variant="outlined"
          />
        </Grid>
        <Grid item xs>
          <TextField
            type="text"
            required
            onChange={(e) => setParam({...paramsInfo, type: e.target.value}, index)}
            label="Type"
            variant="outlined"
          />
        </Grid>
        <Grid item xs>
          <TextField
            type="text"
            required
            onChange={(e) => setParam({...paramsInfo, unit: e.target.value}, index)}
            label="Unit"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={1}>
          <TextField
            fullWidth
            type="text"
            onChange={(e) => setParam({...paramsInfo, min: Number(e.target.value)}, index)}
            label="Min"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={1}>
          <TextField
            fullWidth
            type="text"
            onChange={(e) => setParam({...paramsInfo, max: Number(e.target.value)}, index)}
            label="Max"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={1}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button onClick={() => {addParams();}}>
              Add
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </ThemeProvider>
}