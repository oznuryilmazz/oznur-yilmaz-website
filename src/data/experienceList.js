import { Stack, Typography } from "@mui/material";
import StyledBadge from "../component/PresentIcon";

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

export default experienceList;
