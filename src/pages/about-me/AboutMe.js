import {
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import SocialMediaButtons from "../../component/SocialMediaButtons";
import HireButton from "../../component/HireButton";
import DownloadResume from "../../component/DownloadResume";

export default function AboutMe() {
  const isMobile = useMediaQuery("(max-width: 1000px)");
  return (
    <Container
      maxWidth="fluid"
      style={{
        backgroundColor: "#050505",
        height: (isMobile === true && "100%") || "110vh",
        display: "flex",
        alignItems: "center",
        pb: 15,
        pt: 15,
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          direction={(isMobile === true && "column") || "row"}
          flexDirection={(isMobile === true && "column-reverse") || ""}
          alignItems="center"
          spacing={5}
        >
          <Grid item xs={(isMobile === true && 12) || 7} mb={5}>
            <img src="./img/oznur-yilmaz.png" alt="" width="100%" />
          </Grid>
          <Grid item xs={(isMobile === true && 12) || 5}>
            <Stack spacing={2} mb={2}>
              <Typography variant="body1" fontWeight="bold" color="primary">
                ABOUT ME
              </Typography>
              <Typography variant="h5" fontWeight="bold" color="white">
                Full Stack Developer
                <br /> .NET & React Js Developer
              </Typography>
              <Typography variant="body1" color="white">
                I've been a junior software developer for 4 years. I used this
                programming languages; Python, .Net, Angular, Php, SQL in my
                job. Also I am a freelancer who do website project for large
                companies. Some of my website projects have designed with
                WordPress. Large website projects have designed with PHP, HTML,
                CSS and SQL. I am looking for exciting new projects.
              </Typography>
              <Divider />
              <Stack
                direction={(isMobile === true && "column") || "row"}
                alignItems={(isMobile === true && "start") || "center"}
                justifyContent="space-between"
              >
                <Stack spacing={1} color="white" mt={1}>
                  <Typography>
                    <b>Name:</b> Öznur Yılmaz
                  </Typography>
                  <Typography color="white">
                    <b>Email:</b>
                    <a
                      href="mailto:yilmazoznur53@gmail.com"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      yilmazoznur53@gmail.com
                    </a>
                  </Typography>
                </Stack>
                <Stack spacing={1} color="white" mt={1}>
                  <Typography>
                    <b>From:</b> Istanbul,Turkey
                  </Typography>
                  <Typography color="white">
                    <b>Phone:</b>
                    <a
                      href="tel:+905308827753"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      +90 530 882 7753
                    </a>
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Divider />
            <Stack direction="row" alignItems="center" spacing={1} mt={2}>
              <Typography fontWeight="bold" color="white">
                Follow Me:
              </Typography>
              <SocialMediaButtons color="white" />
            </Stack>
            <Stack direction="row" alignItems="center" mt={3} spacing={2}>
              <HireButton />
              <DownloadResume />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
