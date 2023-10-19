import React from "react";
import { useEffect, useRef } from "react";
import { Stack } from "@mui/material";
import _networks from "../networks.json";
import TiktokBlock from "../components/TiktokBlock";
import RedditBlock from "../components/RedditBlock";
import TwitterBlock from "../components/TwitterBlock";
import InstagramBlock from "../components/InstagramBlock";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import {
  Network,
  NetworkName,
  NetworkNameEnum,
  Content,
  Posts,
  ContentEntryTypeEnum,
} from "../types";
import { getContent } from "../content/content_providers";

export const defaultNetworkName: NetworkName = NetworkNameEnum.REDDIT;

interface NetworksEnum extends Array<Network> {}

const networks = _networks as NetworksEnum;

const block = (network: NetworkName, urlPosts: string): ReactJSXElement => {
  switch (network) {
    case NetworkNameEnum.REDDIT:
      return <RedditBlock url={urlPosts} key={urlPosts} />;
    case NetworkNameEnum.TWITTER:
      return <TwitterBlock url={urlPosts} key={urlPosts} />;
    case NetworkNameEnum.TIKTOK:
      return <TiktokBlock url={urlPosts} key={urlPosts} />;
    case NetworkNameEnum.INSTAGRAM:
      return <InstagramBlock url={urlPosts} key={urlPosts} />;
    default:
      return <></>;
  }
};

type Props = {
  chosenNetwork: string;
};

function Main({ chosenNetwork }: Props) {
  const [networkPosts, setNetworkPosts] = React.useState<Posts>({} as Posts);
  let rendered = useRef(false);

  useEffect(() => {
    const fetchContent = async () => {
      rendered.current = true;
      const posts: Content = (await getContent(
        ContentEntryTypeEnum.POSTS
      )) as Posts;
      setNetworkPosts(posts as Posts);

      for (let network of networks) {
        const scriptElement: HTMLScriptElement =
          document.createElement("script");
        scriptElement.src = network.src;
        scriptElement.async = true;
        document.head.appendChild(scriptElement);
      }
    };

    !rendered.current && fetchContent();
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
