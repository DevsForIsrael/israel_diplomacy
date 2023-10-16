import React from "react";
import { useEffect, useRef } from "react";
import { Stack } from "@mui/material";
import _networks from "../networks.json";
import TiktokBlock from "../components/TiktokBlock";
import RedditBlock from "../components/RedditBlock";
import TwitterBlock from "../components/TwitterBlock";
import InstagramBlock from "../components/InstagramBlock";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Network, NetworkName, Content } from "../types";

import { getContent } from "../content/content_providers";
import { defaultContent } from "../content/Content";

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
  const [networkPosts, setNetworkPosts] = React.useState<Content>(
    {} as Content
  );
  let rendered = useRef(false);

  useEffect(() => {
    const fetchContent = async () => {
      const posts: Content = await getContent();
      setNetworkPosts(posts);

      for (let network of networks) {
        const scriptElement: HTMLScriptElement =
          document.createElement("script");
        scriptElement.src = network.src;
        scriptElement.async = true;
        document.head.appendChild(scriptElement);
      }
    };

    if (!rendered.current) {
      rendered.current = true;
      fetchContent();
    }
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
            {networkPosts[network.name]?.map((post: string) =>
              block(network.name, post)
            )}
          </Stack>
        );
      })}
    </React.Fragment>
  );
}

export default Main;
