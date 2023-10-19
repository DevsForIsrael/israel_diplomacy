import { useState, useRef, useEffect } from "react";
import "./App.css";
import OverviewDrawer from "./components/OverviewDrawer";
import SiteHeader from "./components/SiteHeader";
import ButtonsNetworkChoice from "./components/ButtonsNetworkChoice";
import PageFooter from "./components/PageFooter";
import Main, { defaultNetworkName } from "./components/Main";

import {
  NetworkNameEnum,
  PageContent,
  defaultPageContent,
  Content,
  ContentEntryTypeEnum,
} from "./types";

import { getContent } from "./content/content_providers";

function App() {
  const [chosenNetwork, setChosenNetwork] =
    useState<NetworkNameEnum>(defaultNetworkName);

  const [pageContent, setPageContent] = useState<PageContent>(
    defaultPageContent as PageContent
  );
  let rendered = useRef(false);

  useEffect(() => {
    const fetchContent = async () => {
      rendered.current = true;
      const pageContent: Content = (await getContent(
        ContentEntryTypeEnum.PAGE_CONTENT
      )) as PageContent;
      setPageContent(pageContent);
    };

    !rendered.current && fetchContent();
  }, []);

  return (
    <div className="App">
      <OverviewDrawer />
      <SiteHeader title={pageContent.title} subTitle={pageContent.subTitle} />
      <ButtonsNetworkChoice
        buttonsTitle={pageContent.buttonsTitle}
        setChosenNetwork={setChosenNetwork}
      />
      <Main chosenNetwork={chosenNetwork} />
      <PageFooter footer={pageContent.footer} />
    </div>
  );
}

export default App;
