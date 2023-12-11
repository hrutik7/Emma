import "ui/styles.css";
import Hero from "./components/herosection";
import Navbar from "./components/nav-bar";


export default function Page(): JSX.Element {
  

  return (
 
      <div className="md:mr-[2%] md:ml-[2%]">
      
          <Navbar />
          <Hero />
      
      </div>
   
  );
}
