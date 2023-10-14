import React from "react";
import { useEffect } from "react";
import { Stack } from "@mui/material";
import posts from "../posts.json";
import _networks from "../networks.json";
import { shuffle } from "../utils";
import TiktokBlock from "../components/TiktokBlock";
import RedditBlock from "../components/RedditBlock";
import TwitterBlock from "../components/TwitterBlock";
import InstagramBlock from "../components/InstagramBlock";
import PageFooter from "../components/PageFooter";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Network, networkName } from "../types";
const shuffledPosts = shuffle(posts);

const networkPosts = (networkName: string): string[] => {
  return shuffledPosts
    .reverse()
    .filter((post: string) => post.includes(networkName));
};

export const defaultNetworkName: networkName = "reddit";

interface EnumNetworks extends Array<Network> {}

const networks = _networks as EnumNetworks;

const block = (network: networkName, urlPosts: string): ReactJSXElement => {
  switch (network) {
    case "reddit":
      return <RedditBlock url={urlPosts} />;
    case "twitter":
      return <TwitterBlock url={urlPosts} />;
    case "tiktok":
      return <TiktokBlock url={urlPosts} />;
    case "instagram":
      return <InstagramBlock url={urlPosts} />;
  }
};

type Props = {
  chosenNetwork: string;
};

function Main({ chosenNetwork }: Props) {
  useEffect(() => {
    for (let network of networks) {
      const scriptElement: HTMLScriptElement = document.createElement("script");
      scriptElement.src = network.src;
      scriptElement.async = true;
      document.body.appendChild(scriptElement);
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
            style={{
              display:
                chosenNetwork === network.name ? network.display : "none",
              backgroundColor: "whitesmoke",
            }}
          >
            {networkPosts(network.name).map((post) =>
              block(network.name, post)
            )}
          </Stack>
        );
      })}
      <PageFooter />
    </React.Fragment>
  );
}

export default Main;
