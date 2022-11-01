import { Head } from "$fresh/runtime.ts";
import Navbar from "../components/Navbar.tsx";
import HeroSection from "../components/HeroSection.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sebastian Møldrup</title>
      </Head>
      
      <div class="w-screen overflow-x-hidden bg-violet-900">
        <Navbar />
        <HeroSection />
      </div>
    </>
  );
}
