import { BrowserRouter as Router, Route } from "react-router-dom";
import { ClassicWizard } from "./features/wizard/ClassicWizard";

export const RouterImpl = () => {
  return (<Router>
    <Route path="/wizard" component={ClassicWizard}/>
  </Router>
  );
}