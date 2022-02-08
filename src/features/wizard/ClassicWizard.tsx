import { useState } from "react";
import { HeaderComponent } from "./HeaderComponent";
import YAML from 'yaml';
import { makeStyles } from "@mui/styles";
import { Box, Button, Container } from "@mui/material";
import { ModelsComponent } from "./ModelsComponent";
import { HeaderInput, ModelsInput, ModelType, StepInput } from "../../types/Types";



const useStyles = makeStyles((theme) => ({
  root: {
    margin: 10,
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
  const [editHeader, setEditHeader] = useState(true);
  const [models, setModels] = useState([] as ModelsInput[]);


  const modifyModels = (value: ModelsInput, index: number) => {
    const newModels = [...models];
    newModels[index] = value;
    setModels(newModels);
  }

  const addModel = () => {
    setEditHeader(!editHeader);
    (!state)? setState(!state): setState(true);

    const model = {
      name: 'name',
      description: 'description',
      files: ['file1'] as string[],
      modelType: {
        name: '',
        abbrevation: '',
        description: ''
      } as ModelType,
      steps: [] as StepInput[]
    } as ModelsInput;

    setModels([...models, model]);
  }

  const done = () => {
    const model = {
      name: header?.modelName,
      description: header?.modelDescription,
      project: header?.modelProject,
      type: header?.modelType,
      models
    }
    // tslint:disable-next-line: no-console
    console.log(model);
    const modelYaml = YAML.stringify(model);
    // tslint:disable-next-line: no-console
    console.log(modelYaml);
  }

  return <Container className={styles.root} sx={{p: 2, border: 1, borderRadius: 5}}>
    <HeaderComponent setHeader={setHeader} headerInfo={header as HeaderInput} editHeader={editHeader}/>
    {state && (
    <div>
      {models.map((modelTemp, index) => {
        return <div>
          <ModelsComponent setModels={modifyModels} modelsInfo={modelTemp as ModelsInput} addModels={addModel} index={index}/>
        </div>
      })}
    </div>
    )}
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        {!state && (<Button onClick={() => {addModel();}}>
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
};