import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { DomainsGrid } from "@/components/sections/DomainsGrid";
import { LatestUpdates } from "@/components/sections/LatestUpdates";
import { UpcomingEventModal } from "@/components/events/UpcomingEventModal";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <UpcomingEventModal />
      <HeroSection />
      <AboutSection />
      <DomainsGrid />
      <LatestUpdates />
    </div>
  );
}
