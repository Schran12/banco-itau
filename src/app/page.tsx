import Hero from "@/components/Hero";
import Service from "@/components/Service";
import ConnectFuture from "@/components/ConnectFuture";
import Footer from "@/components/Footer";
import ExclusiveBenefits from "@/components/ExclusiveBenefits";
import WhyChooseItau from "@/components/WhyChooseItau";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <main>
      <Hero />
      <Service />
      <ConnectFuture />
      <ExclusiveBenefits />
      <WhyChooseItau/>
      <CallToAction />
      <Footer />
    </main>
  );
}
