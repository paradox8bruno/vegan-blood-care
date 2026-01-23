import HeroSection from "@/components/HeroSection";
import IdentificationSection from "@/components/IdentificationSection";
import ObjectionsSection from "@/components/ObjectionsSection";
import DoctorSection from "@/components/DoctorSection";
import ConsultationSection from "@/components/ConsultationSection";
import AudienceSection from "@/components/AudienceSection";
import FinalCTASection from "@/components/FinalCTASection";
import DoctoraliaWidget from "@/components/DoctoraliaWidget";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <IdentificationSection />
      <DoctorSection />
      <ConsultationSection />
      <AudienceSection />
      <ObjectionsSection />
      <FinalCTASection />
      <DoctoraliaWidget />
      <Footer />
    </main>
  );
};

export default Index;
