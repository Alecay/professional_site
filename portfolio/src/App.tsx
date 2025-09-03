import { Container } from "react-bootstrap";
import "./App.css";
// import Profile from "./components/old/Profile";
// import CustomNavbar from "./components/old/CustomNavbar";
// import About from "./components/old/About";
// import Skills from "./components/old/Skills";
// import Resume from "./components/old/Resume";
import ContactNav from "./components/v1/ContactNav";
import FooterNav from "./components/v1/FooterNav";
import ModernAbout from "./components/v1/ModernAbout";
import ModernProfile from "./components/v1/ModernProfile";
import ModernSkills from "./components/v1/ModernSkills";
import ProjectCarousel from "./components/v1/ProjectCarousel";

export default function App() {
  return (
    // <div style={{ backgroundColor: "rgba(51, 51, 51, 1)" }}>
    //   {/* <CustomNavbar />
    //   <Profile />
    //   <About />
    //   <Skills />
    //   <Resume /> */}
    // </div>
    <div>
      <ContactNav />
      <ModernProfile />
      <ModernAbout />
      <ModernSkills />
      <Container className="my-4">
        <ProjectCarousel
          slides={[
            {
              src: `${
                import.meta.env.BASE_URL
              }images/fluid_simulation_preview.PNG`,
              alt: "Fluid Simulation",
              title: "Fluid Simulation",
              text: "A GPU Simulation",
            },
            {
              src: `${
                import.meta.env.BASE_URL
              }images/fluid_simulation_preview.PNG`,
              alt: "Fluid Simulation",
              title: "Fluid Simulation",
              text: "A GPU Simulation",
            },
            {
              src: `${
                import.meta.env.BASE_URL
              }images/fluid_simulation_preview.PNG`,
              alt: "Fluid Simulation",
              title: "Fluid Simulation",
              text: "A GPU Simulation",
            },
          ]}
        />
      </Container>
      <FooterNav />
    </div>
  );
}
