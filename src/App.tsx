import { useEffect, useState } from "react";
import "./App.css";
import { Button, ButtonGroup, Drawer, Stack, Typography } from "@mui/material";
import RedditIcon from "@mui/icons-material/Reddit";
// import FacebookIcon from "@mui/icons-material/Facebook";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import TwitterIcon from "@mui/icons-material/Twitter";
import posts from "./posts.json";
import TikTokIcon from "./icons/TiktokIcon";
import il from "./assets/il.svg";
import CloseIcon from '@mui/icons-material/Close';

function App() {
  const [chosenNetwork, setChosenNetwork] = useState<
    "reddit" | "twitter" | "facebook" | "tiktok"
  >("reddit");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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

  const getTiktokVideoId = (url: string) => {
    const regex = /\/video\/(\d+)/;
    const match = url.match(regex);
    return match?.[1] || null;
  };

  return (
    <div className="App">
      <Drawer
        anchor={"top"}
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Stack onClick={() => setIsDrawerOpen(false)} position="absolute" right={0} p={2}><CloseIcon /></Stack>
        <Stack p={4} alignItems="center" gap={2} pb={6}>
          <Typography variant="h5">
            Tips for explaining Israels situation in the world
          </Typography>
          <Stack>
            <Typography variant="subtitle1">Use these facts:</Typography>
            <ul style={{padding: "1em"}}>
              <li style={{marginBottom: "1.5em"}}>
                The death toll from a major Hamas attack had risen above 700,
                with the number expected to increase. Over 100 people were
                reportedly kidnapped and taken to the Gaza Strip.
              </li>
              <li style={{marginBottom: "1.5em"}}>
                Battles were ongoing in several communities near the Gaza border
                that had been overrun by Hamas gunmen. Rocket fire from Gaza
                continued to target Israeli communities.
              </li>
              <li style={{marginBottom: "1.5em"}}>
                The assault by Hamas gunmen had taken place in as many as 22
                locations in southern Israel, resulting in the deaths of
                civilians and soldiers.
              </li>
              <li style={{marginBottom: "1.5em"}}>
                Reports suggested that over 700 people were killed in the
                assault, making it the bloodiest day in Israel's history.
              </li>
              <li style={{marginBottom: "1.5em"}}>
                The Health Ministry reported over 2,200 wounded, with some in
                critical condition.
              </li>
              <li style={{marginBottom: "1.5em"}}>
                Hamas gunmen had taken civilians and soldiers captive into Gaza,
                and there were reports of abuse and parading of dead Israelis in
                the streets.
              </li>
              <li style={{marginBottom: "1.5em"}}>
                Israel was working to locate and rescue the captives, with a
                special situation room established for this purpose.
              </li>
              <li style={{marginBottom: "1.5em"}}>
                Many families were desperately seeking information about missing
                loved ones and criticized the government for not providing
                enough assistance.
              </li>
              <li style={{marginBottom: "1.5em"}}>
                There were concerns about a potential second front opening in
                the north, as Hezbollah shelled Israeli positions on the
                northern border.
              </li>
              <li style={{marginBottom: "1.5em"}}>
                The international community condemned the Hamas assault and the
                abduction of civilians, and Israel received support from Western
                governments.
              </li>
            </ul>
            <p>
              This article describes a tragic and chaotic situation resulting
              from a major conflict between Israel and Hamas, with a significant
              loss of life and many people still unaccounted for. Please note
              that the situation described in the article is based on the
              information available at the time of the report, and developments
              may have occurred since then.
            </p>
            <Stack mt={4}>
              <Button variant="outlined" onClick={() => setIsDrawerOpen(false)}>Close</Button>
            </Stack>
          </Stack>
        </Stack>
      </Drawer>
      <Stack
        p={1}
        style={{ background: "whitesmoke" }}
        direction="row"
        alignItems="center"
        justifyContent="center"
        onClick={() => setIsDrawerOpen(true)}
      >
        <Typography variant="body1">
          Tips for explaining Israels situation in the world
        </Typography>
        <ArrowDropDownIcon />
      </Stack>
      <Stack p={5} pt={3} justifyContent="center" alignItems="center">
        <Stack mb={1} justifyContent="center" alignItems="center" gap={1}>
          <img alt="israel" src={il} style={{ width: 36, height: 36 }} />
          <Typography variant="h1" fontSize={35} fontWeight={700}>
            Help with Israeli Diplomacy across the Web
          </Typography>
        </Stack>
        <Typography variant="h2" fontSize={25}>
          Participate in debates and help spread the truth
        </Typography>
      </Stack>
      <Stack justifyContent="center" alignItems="center" width="100%" mb={3}>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button onClick={() => setChosenNetwork("reddit")}>
            <Stack justifyContent="center" alignItems="center">
              <RedditIcon />
              Reddit
            </Stack>
          </Button>
          <Button onClick={() => setChosenNetwork("twitter")}>
            <Stack justifyContent="center" alignItems="center">
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
            <Stack justifyContent="center" alignItems="center">
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
          backgroundColor: "whitesmoke",
        }}
        position={chosenNetwork === "reddit" ? "initial" : "absolute"}
        top={chosenNetwork === "reddit" ? 0 : -1000}
        zIndex={-1000000}
      >
        {posts
          .reverse()
          .filter((post: string) => post.includes("reddit"))
          .map((post) => {
            return (
              <Stack>
                <blockquote
                  className="reddit-embed-bq"
                  style={{ height: 500 }}
                  data-embed-height="240"
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
        justifyContent="center"
        alignItems="center"
        style={{
          opacity: chosenNetwork === "twitter" ? 1 : 0,
          backgroundColor: "whitesmoke",
        }}
        position={chosenNetwork === "twitter" ? "initial" : "absolute"}
        top={chosenNetwork === "twitter" ? 0 : -1000}
        zIndex={-1000000}
      >
        {posts
          .reverse()
          .filter(
            (post: string) => post.includes("twitter") || post.includes("x")
          )
          .map((post) => {
            return (
              <Stack>
                <blockquote
                  className="twitter-tweet"
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
        justifyContent="center"
        alignItems="center"
        style={{
          opacity: chosenNetwork === "tiktok" ? 1 : 0,
          backgroundColor: "whitesmoke",
        }}
        position={chosenNetwork === "tiktok" ? "initial" : "absolute"}
        top={chosenNetwork === "tiktok" ? 0 : -1000}
        zIndex={-1000000}
      >
        {posts
          .reverse()
          .filter((post: string) => post.includes("tiktok"))
          .map((post) => {
            return (
              <Stack>
                <blockquote
                  className="tiktok-embed"
                  cite={post}
                  data-video-id={getTiktokVideoId(post)}
                >
                  <section>Loading</section>
                </blockquote>
                <script async src="https://www.tiktok.com/embed.js"></script>
              </Stack>
            );
          })}
      </Stack>
      <footer>
        <Stack
          pt={2}
          pb={4}
          justifyContent="center"
          alignItems="center"
          gap={2}
        >
          <Typography variant="body2">
            Made with love
            <br />
            Use this{" "}
            <a href="https://forms.gle/qmt8tQ6mKy8cWLMS7">Google Form</a> for
            adding posts
          </Typography>
          <img alt="israel" src={il} style={{ width: 36, height: 36 }} />
        </Stack>
      </footer>
    </div>
  );
}

export default App;
