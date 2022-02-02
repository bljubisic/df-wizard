import { ThemeProvider } from "@emotion/react";
import { Box, Button, Container, Grid, TextField } from "@mui/material";
import { useState } from "react";
import theme from "../../theme";
import { ParamsInput, StepInput } from "./ClassicWizard";
import { ParametersComponent } from "./ParametersComponent";

export const StepComponent = ({
  stepInfo, 
  setStep,
  addStep,
  index
} : {
    stepInfo: StepInput,
    setStep: (value: StepInput, index: number) => void,
    addStep: () => void,
    index: number
  }
) => {

  const [stateParams, setStateParams] = useState(false);
  const [params, setParams] = useState([] as ParamsInput[]);

  const addParams = () => {
    (!stateParams)? setStateParams(!stateParams): setStateParams(true);
    let item = {
      name: '',
      description: '',
      type: '',
      unit: '',
      min: 0,
      max: 0
    } as ParamsInput;
    setParams([...params, item]);
  }

  const modifyParam = (value: ParamsInput, index: number) => {
    let newParams = [...params];
    newParams[index] = value;
    setParams(newParams);
    setStep({...stepInfo, params: newParams as [ParamsInput]}, index);
  }

  return <ThemeProvider theme={theme}>
    <Container sx={{mt: 1}}>
      <Grid container spacing={2}>
        <Grid item sm={12} md={4}>
          <TextField
            required
            fullWidth
            onChange={(e) => setStep({...stepInfo, name: e.target.value}, index)}
            type="text"
            label="Name"
            variant="outlined"
          />
        </Grid>
        <Grid item sm={12} md={8}>
          <TextField
            type="text"
            fullWidth
            onChange={(e) => setStep({...stepInfo, description: e.target.value}, index)}
            label="Description"
            variant="outlined"
          />
        </Grid>
        {!stateParams && <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={() => {addParams();}}>
            Add Parameters
          </Button>
        </Box>}
        {params.map((paramTemp, indexParam) => {
          return <div>
            <ParametersComponent setParam={modifyParam} paramsInfo={paramTemp as ParamsInput} addParams={addParams} index={indexParam}/>
          </div>
        })}
        {stateParams && <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={() => {addStep();}}>
            Add Step
          </Button>
        </Box>}
      </Grid>
    </Container>
    </ThemeProvider>
}
