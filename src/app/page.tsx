import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-col">
      <>
      <div>
      <Navbar />
      <Hero />
      </div>
      </>
    </main>
  );
}
