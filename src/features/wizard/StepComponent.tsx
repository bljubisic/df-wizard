import { Box, Button, Container, Grid, makeStyles, MenuItem, Select, TextField } from "@material-ui/core";
import { Dispatch, SetStateAction, useState } from "react";
import { ParamsInput, StepInput } from "./ClassicWizard";
import { ParametersComponent } from "./ParametersComponent";

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    marginTop: spacing(2),
  },
  stepContainer: {
    minHeight: 300,
    flex: 1,
  },
}
));

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

  const styles = useStyles();
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
    console.log(newParams);
    setParams(newParams);
    setStep({...stepInfo, params: newParams as [ParamsInput]}, index);
  }

  return <Container>
    <Grid container spacing={2}>
      <Grid item sm={12} md={4}>
        <TextField
          required
          onChange={(e) => setStep({...stepInfo, name: e.target.value}, index)}
          type="text"
          label="Name"
          variant="outlined"
        />
      </Grid>
      <Grid item sm={12} md={4}>
        <TextField
          type="text"
          onChange={(e) => setStep({...stepInfo, description: e.target.value}, index)}
          label="Description"
          variant="outlined"
        />
      </Grid>
      <Grid item sm={12} md={4}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={stepInfo ? stepInfo.paramsNum : 1}
          label="Age"
          onChange={(e) => setStep({...stepInfo, paramsNum: Number(e.target.value)}, index)}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
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
}
