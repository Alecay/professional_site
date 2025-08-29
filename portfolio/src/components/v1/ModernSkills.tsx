import { Col, Container, Row } from "react-bootstrap";
import styles from "./ModernSkills.module.css";
import SkillIcon from "../old/SkillIcon";
import {
  faCode,
  faDisplay,
  faGamepad,
  faMicrochip,
  faPuzzlePiece,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faUnity } from "@fortawesome/free-brands-svg-icons";

export default function ModernSkills() {
  const skills = [
    {
      title: "Game Development",
      content: `I have over 7 years of experience in game development, primarily
              self-taught using Unity and, more recently, Godot over the past 6
              months. I have a solid understanding of game theory and game
              systems, having built various projects. These include an infinite
              voxel terrain generator, a conveyor belt distribution system
              inspired by games like Factorio, and a GPU-accelerated falling
              sand simulator. My work reflects a deep interest in procedural
              generation, complex systems, and efficient performance in game
              development.`,
      icon: faGamepad,
    },
    {
      title: "Unity Game Engine",
      content: `I have over 7 years of experience using the Unity game engine to 
              develop a wide variety of game systems. I specialize in using compute shaders 
              and the Jobs System to create optimized, high-performance game systems, such as 
              procedural generation and large-scale simulations. Additionally, I have 
              experience developing custom editor scripts to streamline the development 
              process, improving workflow efficiency by automating tasks and creating user-friendly tools.`,
      icon: faUnity,
    },
    {
      title: "Godot Game Engine",
      content: `In the past year, I have quickly gained proficiency in Godot, 
              learning how to leverage its systems to develop various projects. 
              Using both GDScript and C#, I have built a infinite voxel terrain 
              generator, and a conveyor belt system, among other projects, 
              demonstrating my ability to adapt to the engine's tools and 
              workflows efficiently.`,
      icon: null,
    },
    {
      title: "JavaScript, HTML, CSS",
      content: `Over the past 2 years, I have taught myself JavaScript, HTML, and CSS. 
              I used these skills to develop a web-based tool for scheduling and 
              reporting that I used during my time as a Service and Engagement 
              Team Leader at Target. Additionally, I applied these skills to 
              create this portfolio website.`,
      icon: faCode,
    },
    {
      title: "C#",
      content: `I have a strong understanding of C#, which I’ve used 
              throughout the last 7 years of my game development journey. 
              C# is my preferred language, especially for large projects, 
              because its structure and class systems allow for cleaner, more 
              organized code. This makes it ideal for managing complex systems 
              and maintaining scalability in my work.`,
      icon: null,
    },
    {
      title: "Compute & HLSL Shaders",
      content: `I have experience writing custom Compute and HLSL shaders in 
              both Unity and Godot. I’ve used Compute shaders to create procedural 
              meshes and a GPU-accelerated falling sand simulator. With HLSL 
              shaders, I’ve developed custom shadow shaders and implemented 
              custom UV mapping for voxel meshes using an atlas texture.`,
      icon: faDisplay,
    },
    {
      title: "Multithreading",
      content: `I’ve used multithreading in various projects across Unity 
              and Godot, incorporating principles like handling race 
              conditions, managing cores, implementing asynchronous tasks, 
              and working with mutexes. Most recently, I applied these 
              skills by creating a priority-based queue to handle and 
              execute mesh data generation and mesh creation tasks for my 
              infinite voxel terrain generator.`,
      icon: faMicrochip,
    },
    {
      title: "Procedural Generation",
      content: `Procedural generation has always been one of my main 
              interests, especially when it comes to creating large, 
              expansive landscapes and worlds like those in Minecraft 
              or Spore. I’ve developed procedural mesh scripts for custom 
              landscapes, a spiral galaxy generator, a dungeon generator, 
              a hex-based height-map visualizer, and my most recent 
              project, an infinite voxel terrain generator.`,
      icon: faPuzzlePiece,
    },
    {
      title: "Version Control",
      content: `I have used GitHub for almost all of my projects 
              and have experience using it with a team to collaboratively 
              complete tasks. I’ve worked with branching and merging 
              for feature development, bug fixes, and experiments, 
              and I’m familiar with handling and resolving merge 
              conflicts efficiently.`,
      icon: faGithub,
    },
    {
      title: "Leadership",
      content: `I have over 5 years of management experience. Currently,
             I’m a Store Leader at Kerbey Lane, where I help manage
              the wait, kitchen, and host staff while ensuring food 
              quality. I previously worked at Target as a Service and 
              Engagement Team Leader for 4 years, where I managed a 
              team of over 50 people. I have extensive experience 
              ensuring teams run smoothly, managing performance, 
              and meeting deadlines.`,
      icon: faUsers,
    },
  ];

  return (
    <Container fluid className={`${styles.skillsContainer}`}>
      <Container fluid className={`${styles.colorBar}`}></Container>
      {/* <Container className={`${styles.skillsPanel}`}>
        <Col className={`${styles.skillCol}`}></Col>
        <Col></Col>
        <Col></Col>
      </Container> */}

      <Container className={`${styles.skillsPanel}`}>
        <Row>
          <h1 style={{ textAlign: "center" }}>Skills</h1>
        </Row>
        <Row
          className={`${styles.skillRow} text-center overflow-hidden row-cols-2 row-cols-sm-3 row-cols-md-4 g-3 justify-content-center`}
        >
          {skills.map((skill, i) => (
            <Col key={i} className={`${styles.skillCol} p-4`}>
              <SkillIcon
                icon={skill.icon ?? faCode}
                iconStyle={{ fontSize: "30px" }}
                divStyle={{ backgroundColor: "#4aaaa2ff", paddingTop: "10px" }}
              />
              <h4 className={`${styles.skillTitle}`}>{skill.title}</h4>
              <p className={`${styles.skillSubtitle}`}>{skill.content}</p>
              {/* <p className={`${styles.skillAccentTitle}`}>Something labeled:</p> */}
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}
