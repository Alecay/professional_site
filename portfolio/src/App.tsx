import "./App.css";
import Profile from "./components/Profile";
import CustomNavbar from "./components/CustomNavbar";
import About from "./components/About";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div style={{ backgroundColor: "rgba(51, 51, 51, 1)" }}>
      <CustomNavbar />
      <Profile />
      <About />
      <Skills />
    </div>
  );
}
