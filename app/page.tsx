import Navbar from "@/components/sections/Navbar";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen w-full bg-ink">
        <Navbar />
        <About />
      </div>
    </main>
  );
}
