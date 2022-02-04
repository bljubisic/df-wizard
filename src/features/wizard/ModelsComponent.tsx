import {ModelsInput, StepInput} from './ClassicWizard';
import { ThemeProvider } from "@mui/private-theming";
import theme from '../../theme';
import { Box, Button, Container, Grid, TextField } from '@mui/material';
import { useState } from 'react';
import { StepComponent } from './StepComponent';

export const ModelsComponent = ({
  modelsInfo,
  setModels,
  addModels,
  index
}: {
  modelsInfo: ModelsInput,
  setModels: (value: ModelsInput, index: number) => void,
  addModels: () => void,
  index: number
}) => {
  const [files, setFiles] = useState([''] as string[]);
  const [state, setState] = useState(false);
  const [steps, setSteps] = useState(modelsInfo.steps as StepInput[]);
  const [editModels, setEditModels] = useState(true);

  const addFiles = () => {
    setFiles([...files, '']);
  }
  const modifyFiles = (value: string, indexFiles: number) => {
    const newFiles = [...files];
    newFiles[indexFiles] = value;
    setFiles(newFiles);
    setModels({...modelsInfo, files: newFiles as [string]}, index);
  }

  const modifyStep = (value: StepInput, indexStep: number) => {
    const newSteps = [...steps];
    newSteps[indexStep] = value;
    setSteps(newSteps as [StepInput]);
    setModels({...modelsInfo, steps: newSteps as [StepInput]}, index);
  }

  const addStep = () => {
    setEditModels(false);
    (!state)? setState(!state): setState(true);
    const item = {
      name: '',
      description: '',
      params: [{
        name: '',
        description: '',
        type: '',
        unit: '',
        min: 0,
        max: 0
      }],
      paramsNum: 0
    } as StepInput;
    setSteps([...steps, item]);
  }

  return <ThemeProvider theme={theme}>
    <Container sx={{m: 2, border: 1, borderRadius: 5}}>
      {editModels && (<Grid container spacing={2} columns={16} sx={{mt: 2}}>
        <Grid item xs>
          <TextField
            required
            onChange={(e) => setModels({...modelsInfo, name: e.target.value}, index)}
            type="text"
            label="Name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            fullWidth
            type="text"
            onChange={(e) => setModels({...modelsInfo, description: e.target.value}, index)}
            label="Model Description"
            variant="outlined"
          />
        </Grid>
        <Grid container spacing={2} sx={{mt: 2}}>
          {files.map((file, indexFile) => {
            return <Grid item xs>
              <TextField
                type="text"
                onChange={(e) => modifyFiles(e.target.value as string, indexFile)}
                label="File name"
                variant="outlined"
              />
            </Grid>
          })}
          <Grid item xs>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button onClick={() => {addFiles();}}>
                Add
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{mt: 1}}>
          <Grid item xs>
            <TextField
              required
              onChange={(e) => setModels({...modelsInfo, modelType: {...modelsInfo.modelType, name: e.target.value}}, index)}
              type="text"
              label="Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs>
            <TextField
              required
              onChange={(e) => setModels({...modelsInfo, modelType: {...modelsInfo.modelType, abbrevation: e.target.value}}, index)}
              type="text"
              label="Abbrevation"
              variant="outlined"
            />
          </Grid>
          <Grid item xs>
            <TextField
              required
              onChange={(e) => setModels({...modelsInfo, modelType: {...modelsInfo.modelType, description: e.target.value}}, index)}
              type="text"
              label="Description"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Grid>
      )}
      {!editModels && (<Grid container spacing={2} columns={16} sx={{mt: 2}}>
        <Grid item xs>
          <label>{modelsInfo.name}</label>
        </Grid>
        <Grid item xs>
          <label>{modelsInfo.description}</label>
        </Grid>
        <Grid container spacing={2} sx={{mt: 2}}>
          {modelsInfo.files.map((file, indexFile) => {
            return <Grid item xs>
              <label>{file}</label>
            </Grid>
          })}
        </Grid>
        <Grid container spacing={2} sx={{mt: 1}}>
          <Grid item xs>
            <label>{modelsInfo.modelType.name}</label>
          </Grid>
          <Grid item xs>
            <label>{modelsInfo.modelType.abbrevation}</label>
          </Grid>
          <Grid item xs>
            <label>{modelsInfo.modelType.description}</label>
          </Grid>
        </Grid>
      </Grid>

      )}
      {state && (
      <div>
        {steps.map((stepTemp, indexTemp) => {
          return <div>
            <StepComponent setStep={modifyStep} stepInfo={stepTemp as StepInput} addStep={addStep} index={indexTemp} />
          </div>
        })}
      </div>
      )}
      <div>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        {!state && (<Button onClick={() => {addStep();}}>
          Add Steps
        </Button>)}
      </Box>
    </div>
    </Container>
  </ThemeProvider>
}