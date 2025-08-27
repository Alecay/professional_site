import { Container, Row } from "react-bootstrap";
import "./Skills.css";
import SkillBox from "./SkillBox";
import {
  faC,
  faCode,
  faDisplay,
  faGamepad,
  faHashtag,
  faMicrochip,
  faPuzzlePiece,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faUnity } from "@fortawesome/free-brands-svg-icons";

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
            <a href="#projects">infinite voxel terrain generator,</a>{" "}
            <a href="#projects">a conveyor belt distribution system</a> inspired
            by games like Factorio, and a{" "}
            <a href="#projects">GPU-accelerated falling sand simulator.</a> My
            work reflects a deep interest in procedural generation, complex
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
        <SkillBox skillName="Godot Game Engine" icon={faGamepad}>
          <p>
            Over the last year, I have quickly gained proficiency in Godot,
            learning how to leverage its systems to develop various projects.
            Using both GDScript and C#, I have built a{" "}
            <a href="#projects">infinite voxel terrain generator,</a> and a{" "}
            <a href="#projects">conveyor belt based automation system,</a> among{" "}
            <a href="#projects">other projects,</a> demonstrating my ability to
            adapt to the engine's tools and workflows efficiently.
          </p>
        </SkillBox>
        <SkillBox skillName="Web Development" icon={faCode}>
          <p>
            I have over 2 years of experience using JavaScript / TypeScript ,
            HTML, CSS, and other libraries like React and Bootstrap. I used
            these skills to develop a{" "}
            <a href="#projects">web-based tool for scheduling and reporting</a>{" "}
            that I used during my time as a{" "}
            <a href="#resume">Service and Engagement Team Leader at Target.</a>{" "}
            Additionally, I applied these skills to create this portfolio
            website.
          </p>
        </SkillBox>
        <SkillBox
          skillName="C#"
          icons={[faC, faHashtag]}
          iconStyle={{ fontSize: "2.25rem" }}
        >
          <p>
            I have a strong understanding of C#, which I’ve used throughout the
            last 7 years of my software development journey. C# is my preferred
            language, especially for large projects, because its structure and
            class systems allow for cleaner, more organized code. This makes it
            ideal for managing complex systems and maintaining scalability in my
            work.
          </p>
        </SkillBox>
        <SkillBox skillName="Compute & HLSL Shaders" icon={faDisplay}>
          <p>
            I have experience writing custom Compute and HLSL shaders in both
            Unity and Godot. I’ve used Compute shaders to create{" "}
            <a href="#projects">procedural meshes</a> and a{" "}
            <a href="#projects">GPU-accelerated falling sand simulator.</a> With
            HLSL shaders, I’ve developed custom shadow shaders and implemented{" "}
            <a href="#projects">custom UV mapping for voxel meshes</a> using an
            atlas texture.
          </p>
        </SkillBox>
        <SkillBox skillName="Multithreading" icon={faMicrochip}>
          <p>
            I’ve used multithreading in various projects across Unity and Godot,
            incorporating principles like handling race conditions, managing
            cores, implementing asynchronous tasks, and working with mutexes.
            Most recently, I applied these skills by creating a
            <a href="#projects">priority-based queue</a>
            to handle and execute mesh data generation and mesh creation tasks
            for my
            <a href="#projects">infinite voxel terrain generator.</a>
          </p>
        </SkillBox>
        <SkillBox skillName="Procedural Generation" icon={faPuzzlePiece}>
          <p>
            Procedural generation has always been one of my main interests,
            especially when it comes to creating large, expansive landscapes and
            worlds like those in Minecraft or Spore. I’ve developed procedural
            mesh scripts for custom landscapes, a{" "}
            <a href="#projects">spiral galaxy generator,</a> a{" "}
            <a href="#projects">dungeon generator</a>, a{" "}
            <a href="#projects">hex-based height-map visualizer,</a> and my most
            recent project, an{" "}
            <a href="#projects">infinite voxel terrain generator.</a>
          </p>
        </SkillBox>
        <SkillBox skillName="Version Control" icon={faGithub}>
          <p>
            I have used GitHub for almost all of{" "}
            <a href="#projects">my projects</a> and have experience using it
            with a team to collaboratively complete tasks. I’ve worked with
            branching and merging for feature development, bug fixes, and
            experiments, and I’m familiar with handling and resolving merge
            conflicts efficiently.
          </p>
        </SkillBox>
        <SkillBox skillName="Leadership" icon={faUsers}>
          <p>
            I have over 5 years of management experience. Currently, I’m a{" "}
            <a href="#resume">Shift Leader at Kerbey Lane,</a> where I help
            manage the wait, kitchen, and host staff while ensuring food
            quality. I previously worked at
            <a href="#resume">
              {" "}
              Target as a Service and Engagement Team Leader
            </a>{" "}
            for 4 years, where I managed a team of over 50 people. I have
            extensive experience ensuring teams run smoothly, managing
            performance, and meeting deadlines.
          </p>
        </SkillBox>
      </Row>
    </Container>
  );
}
