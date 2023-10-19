import { Dispatch, SetStateAction } from "react";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { ButtonGroup } from "@mui/material";
import RedditIcon from "@mui/icons-material/Reddit";
import TwitterIcon from "@mui/icons-material/Twitter";

import InstagramIcon from "@mui/icons-material/Instagram";
import TikTokIcon from "../icons/TiktokIcon";
import { Button } from "@mui/material";
import { NetworkName, NetworkNameEnum } from "../types";

type Props = {
  setChosenNetwork: Dispatch<SetStateAction<NetworkName>>;
  buttonsTitle: string;
};

const ButtonsNetworkChoice = ({ setChosenNetwork, buttonsTitle }: Props) => {
  return (
    <Stack justifyContent="center" alignItems="center" width="100%" mb={3}>
      <Typography
        variant="subtitle1"
        fontFamily="'Century Gothic', Arial, sans-serif"
        fontSize={16}
        pb={0.5}
      >
        {buttonsTitle}
      </Typography>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button onClick={() => setChosenNetwork(NetworkNameEnum.REDDIT)}>
          <Stack justifyContent="center" alignItems="center">
            <RedditIcon />
          </Stack>
        </Button>
        <Button onClick={() => setChosenNetwork(NetworkNameEnum.TWITTER)}>
          <Stack justifyContent="center" alignItems="center">
            <TwitterIcon />
          </Stack>
        </Button>
        <Button onClick={() => setChosenNetwork(NetworkNameEnum.INSTAGRAM)}>
          <Stack justifyContent="center" alignItems="center">
            <InstagramIcon />
          </Stack>
        </Button>
        <Button onClick={() => setChosenNetwork(NetworkNameEnum.TIKTOK)}>
          <Stack justifyContent="center" alignItems="center">
            <TikTokIcon />
          </Stack>
        </Button>
      </ButtonGroup>
    </Stack>
  );
};

export default ButtonsNetworkChoice;
