import { Icon } from "@iconify/react";
import { Container, Stack, Typography, useMediaQuery } from "@mui/material";
import {
  Box,
  Card,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemDecorator,
} from "@mui/joy";
import experienceList from "../../data/experienceList";

export default function ExperienceTimeline() {
  const isMobile = useMediaQuery("(max-width: 1000px)");
  return (
    <Container
      maxWidth="fluid"
      sx={{ backgroundColor: "#0D0D0D" }}
      disableGutters
    >
      <Container
        maxWidth="fluid"
        sx={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url(./img/blog/blog-1.jpg)",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          height: "50vh",
        }}
        disableGutters
      >
        <Stack spacing={2}>
          <Typography variant="body1" fontWeight="bold" color="primary">
            EXPERIENCE
          </Typography>
          <Typography
            variant={(isMobile === true && "h5") || "h4"}
            fontWeight="bold"
            color="white"
          >
            Lets Explore My
            <br /> <b style={{ color: "primary" }}>Experience</b>
          </Typography>
        </Stack>
      </Container>
      <Container maxWidth="lg" sx={{ pt: 15, pb: 15 }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          mb={5}
        >
          <Typography
            variant="h4"
            gutterBottom
            color="white"
            textAlign="center"
            sx={{
              background:
                "linear-gradient(primary,primary) left 0 bottom 10% /100% 20% no-repeat",
            }}
          ></Typography>
        </Stack>
        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(min(100%, 50%), 1fr))",
            gap: 2,
          }}
        >
          {experienceList.map((value, index) => {
            return (
              <Card
                size="lg"
                key={index}
                variant="outlined"
                sx={{ backgroundColor: "transparent" }}
              >
                <Chip size="sm" variant="outlined" color="neutral">
                  {value.location}
                </Chip>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography
                    level="h2"
                    fontWeight="bold"
                    sx={{ color: "white" }}
                  >
                    {value.position}
                    <Typography level="h3" sx={{ color: "white" }}>
                      {value.company}
                    </Typography>
                  </Typography>
                  {value.date}
                </Stack>
                <Divider inset="none" />
                <List
                  size="sm"
                  sx={{ mx: "calc(-1 * var(--ListItem-paddingX))" }}
                >
                  {value.workDetail.map((detail, index) => {
                    return (
                      <ListItem key={index} sx={{ color: "white" }}>
                        <ListItemDecorator>
                          <Icon icon="system-uicons:check" />
                        </ListItemDecorator>
                        {detail.description}
                      </ListItem>
                    );
                  })}
                </List>
              </Card>
            );
          })}
        </Box>
      </Container>
    </Container>
  );
}
