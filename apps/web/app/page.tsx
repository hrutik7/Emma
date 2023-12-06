import { ClerkProvider, SignedOut, SignedIn } from "@clerk/nextjs";
import "ui/styles.css";
import Hero from "./components/herosection";
import Navbar from "./components/Nav";


export default function Page(): JSX.Element {
  const publicKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  return (
    <ClerkProvider publishableKey={publicKey}>
      <div className="md:mr-[2%] md:ml-[2%]">
        <Navbar />
        <Hero />
      </div>
    </ClerkProvider>
  );
}
