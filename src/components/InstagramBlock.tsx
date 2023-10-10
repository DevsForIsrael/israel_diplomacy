import React from "react";
import ShareButtons from "../ShareButtons";
import { Stack } from "@mui/material";

const InstagramBlock = ({ url }: { url: string }) => {
  return (
    <Stack>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: "0",
          borderRadius: "3px",
          boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: "1px",
          maxWidth: "540px",
          minWidth: "326px",
          padding: "0",
          width: "99.375%",
        }}
      ></blockquote>
      <script async src="//www.instagram.com/embed.js"></script>
      <ShareButtons url={url} />
    </Stack>
  );
};

export default InstagramBlock;
