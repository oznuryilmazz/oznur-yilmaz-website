import { Container, Stack, Typography, useMediaQuery } from "@mui/material";
import ExperienceCard from "./ExperienceCard";
import HireButton from "./HireButton";
import DownloadResume from "./DownloadResume";

export default function Slider() {
  const isMobile = useMediaQuery("(max-width: 1000px)");
  return (
    <Container
      maxWidth="fluid"
      style={{
        backgroundImage: "url(./img/background.jpg)",
        height: (isMobile === true && "100%") || "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: (isMobile === true && "row") || "column",
        pt: 15,
        pb: 15,
      }}
      disableGutters
    >
      <Container maxWidth="lg">
        <Stack direction="column" alignItems="start" mt={5}>
          <Typography
            fontSize={(isMobile === true && "20px") || "45px"}
            color="#FFFFFF59"
          >
            Hello, I'm
          </Typography>
          <Typography
            fontSize={(isMobile === true && "40px") || "65px"}
            fontWeight="bold"
            color="primary"
          >
            Öznur Yılmaz
          </Typography>
          <Typography
            variant={(isMobile === true && "h6") || "h3"}
            color="#fff"
          >
            full stack developer
          </Typography>
          <Typography color="#ffffff80" mt={3} mb={1}>
            Proficiency in front-end technologies such as HTML, CSS, JavaScript,
            <br />
            and modern JavaScript frameworks (e.g., React, Angular).
          </Typography>
          <Typography color="#ffffff80" mb={1}>
            Familiarity with Restfull API's and
            <br />
            Services using .Net Core, NodeJS and MVC.
          </Typography>
          <Stack direction="row" alignItems="center" mt={3} mb={10} spacing={2}>
            <HireButton />
            <DownloadResume />
          </Stack>
        </Stack>
        <ExperienceCard />
      </Container>
    </Container>
  );
}
