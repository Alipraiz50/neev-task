import FloatingMessages from "@/components/Animation";
import DocumentationSection from "@/components/DocumentationSection";
import HealthcareFeatures from "@/components/HealthCare";
import HeroSection from "@/components/Hero";
import TeamSection from "@/components/TeamSection";
import WaitlistPage from "@/components/Waitlist";


export default function Home() {
  return (
    <div>
      <HeroSection/>
      <FloatingMessages/>
      <DocumentationSection/>
      <HealthcareFeatures/>
      <TeamSection/>
      <WaitlistPage/>
    </div>
  );
}
