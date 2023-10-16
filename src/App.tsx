import { useState } from "react";
import "./App.css";
import OverviewDrawer from "./components/OverviewDrawer";
import SiteHeader from "./components/SiteHeader";
import ButtonsNetworkChoice from "./components/ButtonsNetworkChoice";
import PageFooter from "./components/PageFooter";
import { NetworkName } from "./types";
import Main, { defaultNetworkName } from "./components/Main";

function App() {
  const [chosenNetwork, setChosenNetwork] =
    useState<NetworkName>(defaultNetworkName);

  return (
    <div className="App">
      <OverviewDrawer />
      <SiteHeader />
      <ButtonsNetworkChoice setChosenNetwork={setChosenNetwork} />
      <Main chosenNetwork={chosenNetwork} />
      <PageFooter />
    </div>
  );
}

export default App;
