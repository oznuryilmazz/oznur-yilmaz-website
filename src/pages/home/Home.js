import { Stack } from "@mui/material";
import Slider from "../../component/Slider";
import AboutMe from "../about-me/AboutMe";
import WebsiteBand from "../../component/WebsiteBand";
import MySkill from "../my-skill/MySkills";
import Blog from "../blog/Blog";
import Contact from "../contact/Contact";
import ExperienceTimelinePart from "../experience/ExperienceTimelinePart";
import PortfolioPart from "../portfolio/PortfolioPart";

export default function Home() {
  return (
    <Stack>
      <Slider />
      <AboutMe />
      <WebsiteBand />
      <PortfolioPart />
      <WebsiteBand />
      <MySkill />
      <WebsiteBand />
      <ExperienceTimelinePart />
      <WebsiteBand />
      <Blog />
      <WebsiteBand />
      <Contact />
    </Stack>
  );
}
