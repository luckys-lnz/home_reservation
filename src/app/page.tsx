import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

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
