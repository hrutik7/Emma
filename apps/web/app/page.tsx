import Image from "next/image";
import { Card } from "ui";
import styles from "./page.module.css";
// import { NavbarDefault } from "./components/Navbar";

import "ui/styles.css";
import { Menubar } from "./components/ui/menubar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import { MenubarDemo } from "./components/Navbar";
// 010001

export default function Page(): JSX.Element {
  return (
   <div className="md:mr-[20%] md:ml-[20%]">
  <Navbar />
  <Hero />
   </div>
  );
}
