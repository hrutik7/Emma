import { ClerkProvider, SignedOut, SignedIn, SignIn } from "@clerk/nextjs";
import "ui/styles.css";
import { Menubar } from "./components/ui/menubar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Page(): JSX.Element {
  const publicKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  
  return (
    <ClerkProvider publishableKey={publicKey}>
      <div className="md:mr-[2%] md:ml-[2%]">
        <SignedOut>
          <Navbar />
          <Hero />
        </SignedOut>
        <SignedIn>
          <Navbar />
          <Hero />
        </SignedIn>
      </div>
    </ClerkProvider>
  );
}
