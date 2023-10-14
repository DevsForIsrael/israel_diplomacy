import { Dispatch, SetStateAction } from "react";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { ButtonGroup } from "@mui/material";
import RedditIcon from "@mui/icons-material/Reddit";
import TwitterIcon from "@mui/icons-material/Twitter";

import InstagramIcon from "@mui/icons-material/Instagram";
import TikTokIcon from "../icons/TiktokIcon";
import { Button } from "@mui/material";
import { networkName } from "../types";

type Props = {
  setChosenNetwork: Dispatch<SetStateAction<networkName>>;
};

const ButtonsNetworkChoice = ({ setChosenNetwork }: Props) => {
  return (
    <Stack justifyContent="center" alignItems="center" width="100%" mb={3}>
      <Typography
        variant="subtitle1"
        fontFamily="'Century Gothic', Arial, sans-serif"
        fontSize={16}
        pb={0.5}
      >
        Preferred Network
      </Typography>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button onClick={() => setChosenNetwork("reddit")}>
          <Stack justifyContent="center" alignItems="center">
            <RedditIcon />
          </Stack>
        </Button>
        <Button onClick={() => setChosenNetwork("twitter")}>
          <Stack justifyContent="center" alignItems="center">
            <TwitterIcon />
          </Stack>
        </Button>
        <Button onClick={() => setChosenNetwork("instagram")}>
          <Stack justifyContent="center" alignItems="center">
            <InstagramIcon />
          </Stack>
        </Button>
        <Button onClick={() => setChosenNetwork("tiktok")}>
          <Stack justifyContent="center" alignItems="center">
            <TikTokIcon />
          </Stack>
        </Button>
      </ButtonGroup>
    </Stack>
  );
};

export default ButtonsNetworkChoice;
