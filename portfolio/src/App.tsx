import "./App.css";
import Profile from "./components/old/Profile";
import CustomNavbar from "./components/old/CustomNavbar";
import About from "./components/old/About";
import Skills from "./components/old/Skills";
import Resume from "./components/old/Resume";
import ContactNav from "./components/v1/ContactNav";

export default function App() {
  return (
    <div style={{ backgroundColor: "rgba(51, 51, 51, 1)" }}>
      <ContactNav />
      {/* <CustomNavbar />
      <Profile />
      <About />
      <Skills />
      <Resume /> */}
    </div>
  );
}
