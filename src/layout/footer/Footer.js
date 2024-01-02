import { Container, Stack, Typography } from "@mui/material";
import SocialMediaButtons from "../../component/SocialMediaButtons";

export default function Footer() {
  return (
    <Container
      maxWidth="fluid"
      disableGutters
      sx={{
        backgroundColor: "primary",
        height: "20vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Typography fontWeight="bold" color="#050505">
            Follow Me:
          </Typography>
          <SocialMediaButtons color="black" />
          <Typography variant="caption" color="#050505" textAlign="center">
            Copyright © 2023, All rights Reserved. <br />
            Created by Öznur Yılmaz
          </Typography>
        </Stack>
      </Container>
    </Container>
  );
}
