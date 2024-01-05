import { Icon } from "@iconify/react";
import {
  Badge,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  Box,
  Card,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemDecorator,
} from "@mui/joy";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    marginRight: "-6px",
    marginTop: "5px",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const experienceList = [
  {
    location: "Istanbul - Turkey",
    position: "Full Stack Developer",
    company: "Frostline Games",
    date: (
      <Stack direction="row" spacing={1}>
        <Typography variant="caption" color="white" gutterBottom>
          July 2022 - Present
        </Typography>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          variant="dot"
        ></StyledBadge>
      </Stack>
    ),
    workDetail: [
      {
        description:
          "New game support ticket system(Dashboard & Website) has been developed with RESTful APIs, React Hooks, Context and React design patterns.",
      },
      {
        description:
          "Played a key role in modernising components of an React.js-based dashboard application using HTML, CSS, and JavaScript.",
      },
      {
        description:
          "Delivered an array of features leveraging React.js/Javascript, React Hooks, Context, and other React.js design patterns, enhancing the application's usability and efficiency.",
      },
      {
        description:
          "In the React.js project, Auth functions and pages were developed to log in to the system. While doing this, RESTful API's, Bearer and JWT Token were used.",
      },
      {
        description: "Started to develop MOBA game dashboard and website",
      },
      {
        description:
          "Developed Game & Website Backend with .NET and database is MSSQL",
      },
      {
        description: "Called RESTful API’s with axios library in the frontend",
      },
      {
        description:
          "Using Git in proffesional workspace, including branching and merging strategies",
      },
    ],
  },
  {
    location: "Istanbul - Turkey",
    position: "Software Developer",
    company: "Marmara University",
    date: (
      <Stack direction="row" spacing={1}>
        <Typography variant="caption" color="white" gutterBottom>
          2021 - 2022
        </Typography>
      </Stack>
    ),
    workDetail: [
      {
        description:
          "New university website (Dashboard & Website) has been developed with using HTML, CSS, and JavaScript",
      },
      {
        description:
          "Bugs are fixed in main website and javascript animations added to main website ",
      },
      {
        description:
          "Database design patters is developed and documented with well code and clean structure",
      },
      {
        description:
          "A system that scores how original the documentation prepared by students is after uploading it to the system was developed with ASP .NET MVC.",
      },
      {
        description:
          "Using Git in proffesional workspace, including branching and merging strategies",
      },
    ],
  },
  {
    location: "Hong Kong - China",
    position: "UI & UX Designer",
    company: "Trust-Fi",
    date: (
      <Stack direction="row" spacing={1}>
        <Typography variant="caption" color="white" gutterBottom>
          2021 - 2022
        </Typography>
      </Stack>
    ),
    workDetail: [
      {
        description: " Created Social media post about crypto coin",
      },
      {
        description: " Created UI design of one of crypto game website",
      },
      {
        description: " Managed social media channels like telegram",
      },
    ],
  },
  {
    location: "Istanbul - Turkey",
    position: "Junior Software Developer",
    company: "Echonos",
    date: (
      <Stack direction="row" spacing={1}>
        <Typography variant="caption" color="white" gutterBottom>
          2021 - 2021
        </Typography>
      </Stack>
    ),
    workDetail: [
      {
        description:
          "Played a key role in modernising components of an Angular-based dashboard application using HTML, CSS, and JavaScript.",
      },
      {
        description: "Bugs are fixed in dashboard written by Angular",
      },
      {
        description: "Bugs are fixed in backend written by .NET",
      },
      {
        description:
          "Created dashboard analyse documentation about new features and usability and efficiency",
      },
      {
        description:
          "Using Git in proffesional workspace, including branching and merging strategies",
      },
    ],
  },
  {
    location: "Istanbul - Turkey",
    position: "Web Designer",
    company: "El Yapım",
    date: (
      <Stack direction="row" spacing={1}>
        <Typography variant="caption" color="white" gutterBottom>
          2019 - 2021
        </Typography>
      </Stack>
    ),
    workDetail: [
      {
        description:
          "Have developed usng PHP, Wordpress, CSS, HTML 4 E-commerce webste - 5 Software - 30+ Business website",
      },
      {
        description: "Learning Adobe apps and done many social media post",
      },
      {
        description: "Used Wordpress Elementor in most for editor",
      },
      {
        description: "Connected website and database(MySQL)",
      },
    ],
  },
  {
    location: "Istanbul - Turkey",
    position: "Web Designer",
    company: "Acarnet",
    date: (
      <Stack direction="row" spacing={1}>
        <Typography variant="caption" color="white" gutterBottom>
          2017- 2017
        </Typography>
      </Stack>
    ),
    workDetail: [
      {
        description: " Have learned PHP,HTML,SQL,CSS scripting languages",
      },
    ],
  },
];

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
