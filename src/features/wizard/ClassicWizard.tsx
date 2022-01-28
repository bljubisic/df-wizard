import { useState } from "react";
import { Box, Button, Container, Step } from "@material-ui/core"
import makeStyles from '@material-ui/core/styles/makeStyles';
import { HeaderComponent } from "./HeaderComponent";
import { style } from "@mui/system";
import { StepComponent } from "./StepComponent";
import { ParametersComponent } from "./ParametersComponent";
import YAML from 'yaml';

export type HeaderInput = {
  modelName: string,
  modelDescription: string,
  modelProject: string,
  modelType: string,
  modelNumber: number
}

export type StepInput = {
  name: string,
  description: string,
  paramsNum: number,
  params: [ParamsInput]
}

export type ParamsInput = {
  name: string,
  description: string,
  type: string,
  unit: string,
  min: number,
  max: number
}

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

export const ClassicWizard = () => {
  const styles = useStyles();
  const [header, setHeader] = useState<HeaderInput>();
  const [state, setState] = useState(false);

  const [steps, setSteps] = useState([] as StepInput[]);


  const modifyStep = (value: StepInput, index: number) => {
    let newSteps = [...steps];
    newSteps[index] = value;
    setSteps(newSteps);
  }

  const addStep = () => {
    (!state)? setState(!state): setState(true);
    
    let item = {
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

  const done = () => {
    console.log(header);
    console.log(steps);
    let headerYaml = YAML.stringify(header);
    let stepsYaml = YAML.stringify(steps);
    console.log(headerYaml + stepsYaml);
  }

  return <Container className={styles.root}>
    <HeaderComponent setHeader={setHeader} headerInfo={header as HeaderInput}/>
    {state && (
    <div>
      {steps.map((stepTemp, index) => {
        return <div>
          <StepComponent setStep={modifyStep} stepInfo={stepTemp as StepInput} addStep={addStep} index={index} />
        </div>
      })}
    </div>
    )}
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        {!state && (<Button onClick={() => {addStep();}}>
          Next
        </Button>)}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        {state && (<Button onClick={() => {done();}}>
          Done
        </Button>)}
      </Box>
    </div>
  </Container>

  // return <div>
  //     {state === 1 && (<div>
  //       <Input type="text" onChange={e => setTitle(e.target.value)}/>
  //     </div>)}
  //     {state !== 1 && state !== 0 && (<div>
  //         <label>{title}</label>
  //       </div>
  //     )}
  //     {state === 2 && (<div>
  //       <Input type="text" onChange={e => setContent(e.target.value)}/>
  //     </div>)}
  //     {state !== 2 && state !== 0 && (<div>
  //         <label>{content}</label>
  //       </div>
  //     )}
  //     {state === 3 && (<div>
  //       <Input type="text" onChange={e => setFooter(e.target.value)}/>
  //     </div>)}
  //     {state !== 3 && state !== 0 && (<div>
  //         <label>{footer}</label>
  //       </div>
  //     )}
  //     <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
  //       <Button onClick={() => {handleNext();}}>
  //         {state === 3 ? 'Finish' : 'Next'}
  //       </Button>
  //     </Box>
  // </div>;
};