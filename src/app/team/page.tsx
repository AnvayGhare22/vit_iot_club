import { Metadata } from "next";
import { TeamView } from "@/components/team/TeamView";

export const metadata: Metadata = {
  title: "Team | IoT Club VIT Pune",
  description: "Meet the minds behind the IoT Club at VIT Pune.",
};

export default function TeamPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4 md:px-8">
      <div className="container mx-auto">
        <TeamView />
      </div>
    </div>
  );
}
