import { SiteHeader } from "@/components/nomos/SiteHeader";
import { Hero } from "@/components/nomos/Hero";
import { TrustStrip } from "@/components/nomos/TrustStrip";
import { Practice } from "@/components/nomos/Practice";
import { WhyUs } from "@/components/nomos/WhyUs";
import { Team } from "@/components/nomos/Team";
import { Process } from "@/components/nomos/Process";
import { Testimonials } from "@/components/nomos/Testimonials";
import { CtaBanner } from "@/components/nomos/CtaBanner";
import { SiteFooter } from "@/components/nomos/SiteFooter";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <TrustStrip />
        <Practice />
        <WhyUs />
        <Team />
        <Process />
        <Testimonials />
        <CtaBanner />
      </main>
      <SiteFooter />
    </div>
  );
}
