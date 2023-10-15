import React from "react";
import { useEffect } from "react";
import { Stack } from "@mui/material";
import _networks from "../networks.json";
import TiktokBlock from "../components/TiktokBlock";
import RedditBlock from "../components/RedditBlock";
import TwitterBlock from "../components/TwitterBlock";
import InstagramBlock from "../components/InstagramBlock";
import PageFooter from "../components/PageFooter";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Network, NetworkName } from "../types";

import { getContent } from "../content/content_providers";

export const defaultNetworkName: NetworkName = "reddit";

interface EnumNetworks extends Array<Network> {}

const networks = _networks as EnumNetworks;

const block = (network: NetworkName, urlPosts: string): ReactJSXElement => {
  switch (network) {
    case "reddit":
      return <RedditBlock url={urlPosts} key={urlPosts} />;
    case "twitter":
      return <TwitterBlock url={urlPosts} key={urlPosts} />;
    case "tiktok":
      return <TiktokBlock url={urlPosts} key={urlPosts} />;
    case "instagram":
      return <InstagramBlock url={urlPosts} key={urlPosts} />;
  }
};

type Props = {
  chosenNetwork: string;
};

function Main({ chosenNetwork }: Props) {
  const [networkPosts, setNetworkPosts] = React.useState<string[]>([]);

  useEffect(() => {
    const fetchContent = async () => {
      for (let network of networks) {
        const scriptElement: HTMLScriptElement =
          document.createElement("script");
        scriptElement.src = network.src;
        scriptElement.async = true;
        document.body.appendChild(scriptElement);
      }

      const posts = await getContent();
      setNetworkPosts(posts);
    };
    fetchContent();
  }, []);

  return (
    <React.Fragment>
      {networks.map((network) => {
        return (
          <Stack
            p={network.padding}
            gap={5}
            justifyContent="center"
            alignItems="center"
            key={network.name}
            style={{
              display:
                chosenNetwork === network.name ? network.display : "none",
              backgroundColor: "whitesmoke",
            }}
          >
            {networkPosts
              .filter((post: string) => post.includes(network.name))
              .map((post: string) => block(network.name, post))}
          </Stack>
        );
      })}
      <PageFooter />
    </React.Fragment>
  );
}

export default Main;
