import { useEffect } from "react";
import "./App.css";
import { Stack, Typography } from "@mui/material";
import posts from "./posts.json";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//embed.redditmedia.com/widgets/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className='App'>
      <Stack p={5}>
        <Stack mb={1}>
          <Typography variant='h1' fontSize={35} fontWeight={700}>
            Help with Israeli Diplomacy across the Web
          </Typography>
        </Stack>
        <Typography variant='h2' fontSize={25}>
          Participate in debates and help spread the truth
        </Typography>
      </Stack>
      <Stack p={5} gap={5} width='100%'>
        {posts.map((post) => {
          return (
            <Stack>
              <blockquote
                className='reddit-embed-bq'
                style={{ height: 500 }}
                data-embed-height='240'
              >
                <a href={post}>{post}</a>
              </blockquote>
            </Stack>
          );
        })}
      </Stack>
    </div>
  );
}

export default App;
