import { Container, Row } from "react-bootstrap";
import "./Skills.css";
import SkillBox from "./SkillBox";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { faUnity } from "@fortawesome/free-brands-svg-icons";

export default function Skills() {
  return (
    <Container fluid className="skills" id="skills">
      <h1 className="title">Skills</h1>
      <Row>
        <SkillBox skillName="Game Development" icon={faGamepad}>
          <p>
            I have over 7 years of experience in game development, primarily
            self-taught using Unity and, more recently, Godot over the past 6
            months. I have a solid understanding of game theory and game
            systems, having built various projects. These include an{" "}
            <a className="exampleLink" href="#projects">
              infinite voxel terrain generator,
            </a>{" "}
            <a className="exampleLink" href="#projects">
              a conveyor belt distribution system
            </a>{" "}
            inspired by games like Factorio, and a{" "}
            <a className="exampleLink" href="#projects">
              GPU-accelerated falling sand simulator.
            </a>{" "}
            My work reflects a deep interest in procedural generation, complex
            systems, and efficient performance in game development.
          </p>
        </SkillBox>
        <SkillBox skillName="Unity Game Engine" icon={faUnity}>
          <p>
            I have over 7 years of experience using the Unity game engine to
            develop a wide variety of game systems. I specialize in using
            compute shaders and the Jobs System to create optimized,
            high-performance game systems, such as procedural generation and
            large-scale simulations. Additionally, I have experience developing
            custom editor scripts to streamline the development process,
            improving workflow efficiency by automating tasks and creating
            user-friendly tools.
          </p>
        </SkillBox>
        <SkillBox skillName="Godot Game Engine" icon={faGamepad}></SkillBox>
        <SkillBox skillName="JavaScript, HTML, CSS" icon={faGamepad}></SkillBox>
        <SkillBox skillName="C#" icon={faGamepad}></SkillBox>
        <SkillBox
          skillName="Compute & HLSL Shaders"
          icon={faGamepad}
        ></SkillBox>
        <SkillBox skillName="Multithreading" icon={faGamepad}></SkillBox>
        <SkillBox skillName="Procedural Generation" icon={faGamepad}></SkillBox>
        <SkillBox skillName="Version Control" icon={faGamepad}></SkillBox>
        <SkillBox skillName="Leadership" icon={faGamepad}></SkillBox>
      </Row>
    </Container>
  );
}
