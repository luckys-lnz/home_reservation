import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
// import Apartment from "@/components/Apartment";

export default function Home() {
  return (
    <main className="flex-col">
      <>
      <div>
      <Navbar />
      <Hero />
      {/* <Apartment /> */}
      </div>
      </>
    </main>
  );
}
