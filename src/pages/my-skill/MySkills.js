import { LinearProgress } from "@mui/joy";
import { Container, Stack, Typography, useMediaQuery } from "@mui/material";

const experienceList = [
  {
    count: 80,
    experienceName: "REACT JS",
  },
  {
    count: 70,
    experienceName: "JAVASCRIPT",
  },
  {
    count: 60,
    experienceName: ".NET",
  },
  {
    count: 60,
    experienceName: "UI/UX",
  },
  {
    count: 50,
    experienceName: "DEVOPS",
  },
  {
    count: 100,
    experienceName: "WORDPRESS",
  },
];

export default function MySkill() {
  const isMobile = useMediaQuery("(max-width: 1000px)");
  return (
    <Container
      maxWidth="fluid"
      sx={{ backgroundColor: "#0D0D0D", pt: 15, pb: 15 }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={(isMobile === true && "column") || "row"}
          justifyContent="space-between"
          alignItems={(isMobile === true && "start") || "center"}
          spacing={3}
        >
          <Stack spacing={2}>
            <Typography variant="body1" fontWeight="bold" color="primary">
              MY SKILLS
            </Typography>
            <Typography
              variant={(isMobile === true && "h5") || "h4"}
              fontWeight="bold"
              color="white"
            >
              Lets Explore My
              <br /> <b style={{ color: "primary" }}>Skills and Experience</b>
            </Typography>
          </Stack>
          <Stack
            direction="column"
            width={(isMobile === true && "100%") || "60%"}
            spacing={3}
          >
            {experienceList.map((value, index) => (
              <Stack
                direction="row"
                spacing={3}
                display="grid"
                gridTemplateColumns={
                  (isMobile === true && "20% 70% 10%") || "15% 75% 10%"
                }
                alignItems="center"
              >
                <Typography
                  variant={(isMobile === true && "body2") || "inherit"}
                  fontWeight="bold"
                  color="white"
                >
                  {value.experienceName}
                </Typography>
                <LinearProgress
                  variant="plain"
                  determinate
                  value={value.count}
                  sx={{ color: "primary" }}
                />
                <Typography
                  variant={(isMobile === true && "body2") || "inherit"}
                  fontWeight="bold"
                  color="white"
                  textAlign="right"
                >
                  {value.count}%
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Container>
  );
}
