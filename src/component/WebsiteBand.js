import { Container, Stack, Typography, useMediaQuery } from "@mui/material";

export default function WebsiteBand() {
  const isMobile = useMediaQuery("(max-width: 1000px)");
  return (
    <Container maxWidth="fluid" sx={{ backgroundColor: "#ededed" }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        textAlign="center"
        spacing={1}
        mt={3}
        mb={3}
      >
        <Typography
          variant={(isMobile === true && "body1") || "h5"}
          fontWeight="bold"
          sx={{
            WebkitTextStroke: 0.6,
            WebkitTextStrokeColor: "black",
            color: "transparent",
            display: (isMobile === true && "none") || "",
          }}
        >
          # Front-End Developer
        </Typography>
        <Typography
          variant={(isMobile === true && "body1") || "h5"}
          fontWeight="bold"
        >
          # Web Designer
        </Typography>
        <Typography
          variant={(isMobile === true && "body1") || "h5"}
          fontWeight="bold"
          sx={{
            WebkitTextStroke: 0.6,
            WebkitTextStrokeColor: "black",
            color: "transparent",
          }}
        >
          # Full Stack Developer
        </Typography>
        <Typography
          variant={(isMobile === true && "body1") || "h5"}
          fontWeight="bold"
        >
          # React Developer
        </Typography>
        <Typography
          variant={(isMobile === true && "body1") || "h5"}
          fontWeight="bold"
          sx={{
            WebkitTextStroke: 0.6,
            WebkitTextStrokeColor: "black",
            color: "transparent",
            display: (isMobile === true && "none") || "",
          }}
        >
          # .Net Developer
        </Typography>
        <Typography
          variant={(isMobile === true && "body1") || "h5"}
          fontWeight="bold"
          sx={{
            display: (isMobile === true && "none") || "",
          }}
        >
          # Node.js Developer
        </Typography>
      </Stack>
    </Container>
  );
}
