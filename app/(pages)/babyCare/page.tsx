// import Blog from "./components/home/Blog";
// import VideoSection from "./components/home/VideoSection";
import VideoSection from "@/app/components/babyCare/VideoSection";
import CTA from "@/app/components/babyCare/CTA";
import HeroSection from "@/app/components/babyCare/HeroSection";
import LeftRight from "@/app/components/babyCare/LeftRight";
import Product from "@/app/components/babyCare/Product";
import Testimonial from "@/app/components/babyCare/Testimonial";
import WhyChoose from "@/app/components/babyCare/why-choose";
import AboutSection from "@/app/components/babyCare/AboutSection";
import BabyWalkingSection from "@/app/components/babyCare/BabyWalkingSection";
import ChildCareStepSection from "@/app/components/babyCare/ChildCareStepSection";
import Blog from "@/app/components/babyCare/Blog";
import ZuvyBabyModel from "@/app/components/babyCare/ZuvyBabyModel";

export default function Home() {
  return (
    <main className="">
      <HeroSection />

      <WhyChoose />

      <Product />

      {/* <ZuvyBabyModel /> */}

      {/* <BabyWalkingSection /> */}

      {/* <LeftRight /> */}

      <VideoSection />

      <Testimonial />
      {/* <AboutSection /> */}

      <ChildCareStepSection />


      <Blog />

      <CTA />
    </main>
  );
}
