import ThreeD from "./components/home/3D";
import BigImage from "./components/home/BigImage";
import Category from "./components/home/Category";
import CTA from "./components/home/CTA";
import HomePage from "./components/home/HomePage";
import LeftRight from "./components/home/LeftRight";
import Product from "./components/home/Product";
import Testimonial from "./components/home/Testimonial";
import WhyChoose from "./components/home/why-choose";
// import Blog from "./components/home/Blog";
// import VideoSection from "./components/home/VideoSection";

export default function Home() {
  return (
    <main>
      <HomePage />
      <ThreeD />
      <WhyChoose />
      <LeftRight />
      <Category />
      {/* <VideoSection /> */}
      {/* <BigImage src="/baby/happy-baby.png" alt="Happy Baby" /> */}
      <BigImage />
      <Product />
      <Testimonial />
      {/* <Blog /> */}
      <CTA />
    </main>
  );
}
