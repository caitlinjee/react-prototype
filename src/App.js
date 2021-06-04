import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import RowBox from "./components/RowBox/RowBox";
import NavBar from "./components/NavBar/NavBar";
import Drawer from "./components/Drawer/Drawer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LoginOrRegister from "./pages/LoginOrRegister";
import Intents from "./pages/Intents";
import IntentDetail from "./pages/IntentDetail";
import LoginForm from "./components/LoginForm/LoginForm";
import RequiredParamTable from "./components/IntentDetail/RequiredParamTable";
import TrainingPhraseForm from "./components/IntentDetail/TrainingPhraseForm";

function App() {
  return (
    <div>
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path='/' component={LoginOrRegister} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/intents' component={Intents} />
            <Route exact path='/intentdetail' component={IntentDetail} />
          </Switch>
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
