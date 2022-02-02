import { Grid, TextField, Container } from "@mui/material"
import { ThemeProvider } from "@mui/private-theming";
import { makeStyles } from "@mui/styles";
import { Dispatch, SetStateAction} from "react"
import theme from "../../theme";
import { HeaderInput } from "./ClassicWizard"

const useStyles = makeStyles(() => ({
  name: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 14
  }
}));


export const HeaderComponent = ({
  headerInfo,
  setHeader,
  editHeader
} : {
  headerInfo: HeaderInput,
  setHeader: Dispatch<SetStateAction<HeaderInput | undefined>>,
  editHeader: boolean
}) => {
  const style = useStyles();
  return <ThemeProvider theme={theme}>
    <Container sx={{m: 2}}>
      {editHeader && (<Grid container spacing={2} columns={16}>
        <Grid item xs>
          <TextField
            required
            onChange={(e) => setHeader({...headerInfo, modelName: e.target.value})}
            type="text"
            label="Model Name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            fullWidth
            type="text"
            onChange={(e) => setHeader({...headerInfo, modelDescription: e.target.value})}
            label="Model Description"
            variant="outlined"
          />
        </Grid>
        <Grid item xs>
          <TextField
            type="text"
            onChange={(e) => setHeader({...headerInfo, modelProject: e.target.value})}
            label="Project"
            variant="outlined"
          />
        </Grid>
        <Grid item xs>
          <TextField
            type="text"
            onChange={(e) => setHeader({...headerInfo, modelType: e.target.value})}
            label="Type"
            variant="outlined"
          />
        </Grid>
      </Grid>)}
      {!editHeader && headerInfo && (<Grid container spacing={2} columns={16}>
        <Grid item xs>
          <label className={style.name}>{headerInfo.modelName}</label>
        </Grid>
        <Grid item xs={8}>
          <label className={style.text}>{headerInfo.modelDescription}</label>
        </Grid>
        <Grid item xs>
          <label className={style.text}>{headerInfo.modelProject}</label>
        </Grid>
        <Grid item xs>
          <label className={style.text}>{headerInfo.modelType}</label>
        </Grid>
      </Grid>)}
    </Container>
  </ThemeProvider>
}