import React from "react";
import ContactSupportIcon from '@material-ui/icons/ContactSupport';

import NavBar from "../components/NavBar/NavBar";
import IntentTable from "../components/IntentTable/IntentTable"


/*https://material-ui.com/components/accordion/#secondary-heading-and-columns
https://material-ui.com/components/tables/
ClickableBox*/

class Intents extends React.Component {

  render() {
    return (
      <div>
        <NavBar />
        <h1 style = {{margin:"1em"}}><ContactSupportIcon /> Intents</h1>
        <div style = {{margin:"1em"}}>
          <IntentTable />
        </div>
      </div>

    )}
}

export default Intents;
