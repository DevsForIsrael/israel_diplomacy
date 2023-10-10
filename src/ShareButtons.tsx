import { Stack } from "@mui/material";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  RedditShareButton,
} from "react-share";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import RedditIcon from "@mui/icons-material/Reddit";

type Props = {
  url: string;
};

const ShareButtons = ({ url }: Props) => {
  return (
    <Stack
      style={{
        boxSizing: "border-box",
        padding: "8px",
        flexDirection: "row-reverse",
        marginTop: "-1.2rem",
        height: "fit-content",
        width: "100%",
        background: "white",
      }}
    >
      <WhatsappShareButton url={url}>
        <WhatsAppIcon />
      </WhatsappShareButton>
      <TwitterShareButton url={url}>
        <TwitterIcon />
      </TwitterShareButton>
      <FacebookShareButton url={url}>
        <FacebookIcon />
      </FacebookShareButton>
      <TelegramShareButton url={url}>
        <TelegramIcon />
      </TelegramShareButton>
      <RedditShareButton url={url}>
        <RedditIcon />
      </RedditShareButton>
    </Stack>
  );
};

export default ShareButtons;
