import Image from "next/image";
import { Card } from "ui";
import styles from "./page.module.css";
import { SignInButton } from "@clerk/nextjs";
import "ui/styles.css";
import { Menubar } from "./components/ui/menubar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";


export default function Page(): JSX.Element {
  return (
   <div className="md:mr-[2%] md:ml-[2%]">
  <Navbar />
  <Hero />
  
   </div>
  );
}
