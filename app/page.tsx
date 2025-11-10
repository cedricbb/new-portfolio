import AboutSection from "@/app/components/AboutSection";
import HeroSection from "@/app/Home/page";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col">
          <div className="container mt-4 md:mt-24 mx-auto  px-4 md:px-12 py-4">
            <HeroSection />
              <AboutSection />
          </div>
      </main>
  );
}
