import { Input } from "@material-ui/core";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { useState } from "react";

export const ClassicWizard = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [footer, setFooter] = useState('');
  const [state, setState] = useState(1);

  const handleNext = () => {
    console.log(state);
    if(state === 3) {
      setState(1);
    } else {
      setState(state + 1);
    }
  }

  return (<div>
      {state === 1 && (<div>
        <Input type="text" onChange={e => setTitle(e.target.value)}/>
      </div>)}
      {state !== 1 && state !== 0 && (<div>
          <label>{title}</label>
        </div>
      )}
      {state === 2 && (<div>
        <Input type="text" onChange={e => setContent(e.target.value)}/>
      </div>)}
      {state !== 2 && state !== 0 && (<div>
          <label>{content}</label>
        </div>
      )}
      {state === 3 && (<div>
        <Input type="text" onChange={e => setFooter(e.target.value)}/>
      </div>)}
      {state !== 3 && state !== 0 && (<div>
          <label>{footer}</label>
        </div>
      )}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={() => {handleNext();}}>
          {state === 3 ? 'Finish' : 'Next'}
        </Button>
      </Box>
  </div>);
};