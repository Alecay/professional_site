// import NavbarLink from "./bootstrap/navbar/NavbarLink";
// import ShrinkNavbar from "./ShrinkNavbar";

// interface Props {
//   backgroundColor?: string;
//   shrinkThreshold?: number;
// }

// export default function PorfolioNavbar({
//   backgroundColor = "rgba(51, 51, 51, 1)",
//   shrinkThreshold = 90,
// }: Props) {
//   //   const sharedLinkStyle: React.CSSProperties = { color: "rgb(74, 170, 83)" };
//   const sharedLinkClass: string = "fs-3 pe-5 text-white";
//   const lastLinkClass: string = "fs-3 text-white";

//   return (
//     <ShrinkNavbar
//       theme="light"
//       alignItems="right"
//       placement="fixed-top"
//       label="Alec Groseclose"
//       labelClass="fw-bold me-auto"
//       labelStyle={{ fontSize: "1.75rem", color: "white" }}
//       labelShrinkStyle={{
//         fontSize: "1.75rem",
//         color: "rgba(0,0,0,0)",
//         paddingTop: "1.5rem",
//         paddingBottom: "1.5rem",
//       }}
//       backgroundColor={backgroundColor}
//       shrinkThreshold={shrinkThreshold}
//     >
//       <NavbarLink className={sharedLinkClass}>About</NavbarLink>
//       <NavbarLink className={sharedLinkClass}>Skills</NavbarLink>
//       <NavbarLink className={sharedLinkClass}>Projects</NavbarLink>
//       <NavbarLink className={sharedLinkClass}>Resume</NavbarLink>
//       <NavbarLink className={lastLinkClass} style={{ paddingRight: "15rem" }}>
//         Contact
//       </NavbarLink>
//     </ShrinkNavbar>
//   );
// }
