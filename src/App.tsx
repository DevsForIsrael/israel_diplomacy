import { useEffect, useState } from "react";
import "./App.css";
import { Button, ButtonGroup, Stack, Typography } from "@mui/material";
import RedditIcon from "@mui/icons-material/Reddit";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import posts from "./posts.json";
import TikTokIcon from "./icons/TiktokIcon";

function App() {
  const [chosenNetwork, setChosenNetwork] =
    useState<"reddit" | "twitter" | "facebook" | "tiktok">("reddit");

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
  }, []);

  return (
    <div className='App'>
      <Stack p={5} pt={2}>
        <Stack mb={1}>
          <span style={{ fontSize: "2em" }}>🇮🇱</span>
          <Typography variant='h1' fontFamily="'Century Gothic', Arial, sans-serif"   fontSize={35} fontWeight={700}>
            Help with Israeli Diplomacy across the Web
          </Typography>
        </Stack>
        <Typography variant='h2'  fontFamily="'Century Gothic', Arial, sans-serif" fontSize={25}>
          Participate in debates and help spread the truth
        </Typography>
      </Stack>
      <Stack justifyContent='center' alignItems='center' width='100%'>
        <ButtonGroup variant='outlined' aria-label='outlined button group'>
          <Button onClick={() => setChosenNetwork("reddit")}>
            <Stack justifyContent='center' alignItems='center'>
              <RedditIcon />
              Reddit
            </Stack>
          </Button>
          <Button onClick={() => setChosenNetwork("twitter")}>
            <Stack justifyContent='center' alignItems='center'>
              <TwitterIcon />
              Twitter
            </Stack>
          </Button>
          {/* <Button onClick={() => setChosenNetwork("facebook")}>
            <Stack justifyContent='center' alignItems='center'>
              <FacebookIcon />
              Facebook
            </Stack>
          </Button> */}
          <Button onClick={() => setChosenNetwork("tiktok")}>
            <Stack justifyContent='center' alignItems='center'>
              <TikTokIcon />
              Tiktok
            </Stack>
          </Button>
        </ButtonGroup>
      </Stack>
      <Stack
        p={2}
        gap={5}
        style={{
          opacity: chosenNetwork === "reddit" ? 1 : 0,
        }}
        position={chosenNetwork === "reddit" ? "initial" : "absolute"}
        top={chosenNetwork === "reddit" ? 0 : -1000}
        zIndex={-1000000}
      >
        {posts
          .filter((post: string) => post.includes("reddit"))
          .map((post) => {
            return (
              <Stack>
                <blockquote
                  className='reddit-embed-bq'
                  style={{ height: 500 }}
                  data-embed-height='240'
                >
                  <a href={post}>Loading</a>
                </blockquote>
              </Stack>
            );
          })}
      </Stack>
      <Stack
        p={1}
        gap={5}
        justifyContent='center'
        alignItems='center'
        style={{
          display:"grid",
          opacity: chosenNetwork === "twitter" ? 1 : 0,
         
        }}
        position={chosenNetwork === "twitter" ? "initial" : "absolute"}
        top={chosenNetwork === "twitter" ? 0 : -1000}
        zIndex={-1000000}
      >
        {posts
          .filter(
            (post: string) => post.includes("twitter") || post.includes("x")
          )
          .map((post) => {
            return (
              <Stack>
                <blockquote
                  className='twitter-tweet'
                  style={{ width: "350px" }}
                >
                  <a href={post.toLowerCase().replace("x.", "twitter.")}>
                    Loading
                  </a>
                </blockquote>
              </Stack>
            );
          })}
      </Stack>
      <Stack
        p={1}
        gap={5}
        justifyContent='center'
        alignItems='center'
        style={{
          opacity: chosenNetwork === "tiktok" ? 1 : 0,
        }}
        position={chosenNetwork === "tiktok" ? "initial" : "absolute"}
        top={chosenNetwork === "tiktok" ? 0 : -1000}
        zIndex={-1000000}
      >
        {posts
          .filter((post: string) => post.includes("tiktok"))
          .map((post) => {
            return (
              <Stack>
                <blockquote
                  className='tiktok-embed'
                  cite='https://www.tiktok.com/@orel_nissan/video/7287238989013175560'
                  data-video-id='7287238989013175560'
                >
                  <section>Loading</section>
                </blockquote>
                <script async src='https://www.tiktok.com/embed.js'></script>
              </Stack>
            );
          })}
      </Stack>
      <footer>
        <Stack pt={2} pb={4}>
          <Typography variant='body2'>
            Made with love
            <br />
            Use this{" "}
            <a href='https://forms.gle/qmt8tQ6mKy8cWLMS7'>Google Form</a> for
            adding posts
          </Typography>
          <span style={{ fontSize: "2em" }}>🇮🇱</span>
        </Stack>
      </footer>
    </div>
  );
}

export default App;
