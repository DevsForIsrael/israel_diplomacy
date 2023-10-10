import React from 'react'
import { Stack } from '@mui/material';
import { Typography } from '@mui/material';
import il from "../assets/il.svg";


const PageFooter = () => {
  return (
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
  )
}

export default PageFooter