import { useEffect, useState } from "react";
import "./App.css";
import {
  Box,
  Button,
  ButtonGroup,
  Drawer,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";
import posts from "./posts.json";
import { shuffle } from "./utils";
import InstagramIcon from "@mui/icons-material/Instagram";
import TiktokBlock from "./components/TiktokBlock";
import RedditBlock from "./components/RedditBlock";
import TwitterBlock from "./components/TwitterBlock";
import InstagramBlock from "./components/InstagramBlock";
import OverviewDrawer from "./components/OverviewDrawer";
import SiteHeader from "./components/SiteHeader";
import ButtonsNetworkChoice from "./components/ButtonsNetworkChoice";
import PageFooter from "./components/PageFooter";

const shuffledPosts = shuffle(posts);

function App() {
  const [chosenNetwork, setChosenNetwork] = useState<
    "reddit" | "twitter" | "facebook" | "tiktok" | "instagram"
  >("reddit");

  useEffect(() => {
    const reddit = document.createElement("script");
    reddit.src = "//embed.redditmedia.com/widgets/platform.js";
    reddit.async = true;
    document.body.appendChild(reddit);
    const twitter = document.createElement("script");
    twitter.src = "//platform.twitter.com/widgets.js";
    twitter.async = true;
    document.body.appendChild(twitter);
    const tiktok = document.createElement("script");
    tiktok.src = "//www.tiktok.com/embed.js";
    tiktok.async = true;
    document.body.appendChild(tiktok);
    const ig = document.createElement("script");
    ig.src = "//www.instagram.com/embed.js";
    ig.async = true;
    document.body.appendChild(ig);
  }, []);

  return (
    <div className="App">
      <OverviewDrawer />
      <SiteHeader />
      <ButtonsNetworkChoice setChosenNetwork={setChosenNetwork} />
      <Stack
        p={2}
        gap={5}
        justifyContent="center"
        alignItems="center"
        style={{
          display: chosenNetwork === "reddit" ? "" : "none",
          backgroundColor: "whitesmoke",
        }}
      >
        {shuffledPosts
          .reverse()
          .filter((post: string) => post.includes("reddit"))
          .map((post) => {
            return <RedditBlock url={post} />;
          })}
      </Stack>
      <Stack
        p={1}
        gap={5}
        justifyContent="center"
        alignItems="center"
        style={{
          display: chosenNetwork === "twitter" ? "grid" : "none",
          backgroundColor: "whitesmoke",
        }}
      >
        {shuffledPosts
          .reverse()
          .filter(
            (post: string) => post.includes("twitter") || post.includes("x.com")
          )
          .map((post) => {
            return <TwitterBlock url={post} />;
          })}
      </Stack>
      <Stack
        p={1}
        gap={5}
        justifyContent="center"
        alignItems="center"
        style={{
          display: chosenNetwork === "tiktok" ? "" : "none",
          backgroundColor: "whitesmoke",
        }}
      >
        {shuffledPosts
          .reverse()
          .filter((post: string) => post.includes("tiktok"))
          .map((post) => {
            return <TiktokBlock url={post} />;
          })}
      </Stack>
      <Stack
        p={1}
        gap={5}
        justifyContent="center"
        alignItems="center"
        style={{
          display: chosenNetwork === "instagram" ? "" : "none",
          backgroundColor: "whitesmoke",
        }}
      >
        {shuffledPosts
          .reverse()
          .filter((post: string) => post.includes("instagram"))
          .map((post) => (
            <InstagramBlock url={post} />
          ))}
      </Stack>
      <PageFooter />
    </div>
  );
}

export default App;
