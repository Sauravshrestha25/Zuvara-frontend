"use client";

// import { Icon } from "@iconify/react";
// import gsap from "gsap";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// import { useGSAP } from "@gsap/react";
// import Button from "../common-ui/Button";
// import Title from "../shared/Title";
// import {
//   ShieldCheck,
//   BadgeCheck,
//   Sparkles,
//   Clock,
//   HeartHandshake,
//   Shield,
//   Leaf,
//   Moon,
// } from "lucide-react";

// gsap.registerPlugin(MotionPathPlugin);

// const AnimatedHeroMedia = () => {
//   useGSAP(() => {
//     gsap.set("#plane", {
//       autoAlpha: 1,
//       xPercent: -50,
//       yPercent: -50,
//       transformOrigin: "50% 50%",
//     });
//     gsap.to("#plane", {
//       duration: 15,
//       repeat: -1,
//       ease: "none",
//       motionPath: {
//         path: "#planePath",
//         align: "#planePath",
//         autoRotate: true,
//         alignOrigin: [0.5, 0.5],
//       },
//     });
//   }, []);

//   return (
//     <div className=" relative overflow-hidden">
//       <video
//         src="/videos/babyPlaying.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="w-100 h-120 object-cover aspect-[4/5] lg:aspect-auto"
//       />
//       {/* SVG Path animation container */}
//       <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
//         <img
//           id="plane"
//           src="/svg/plane.svg"
//           alt="plane"
//           className="size-8 lg:size-12 absolute opacity-0 invisible"
//         />
//         <svg viewBox="0 0 524 179" className="w-full h-full" fill="none">
//           <path
//             id="planePath"
//             d="M63.0529 9.83417C55.305 13.0764 45.5177 19.2422 44.0206 20.2642C31.2087 29.0105 0.0460895 53.3461 1.02242 67.0042C1.47701 73.3633 2.35943 78.6096 5.64178 86.2286C8.92414 93.8476 14.4393 103.545 18.447 111.097C22.4547 118.648 24.8813 123.895 31.2087 131.596C37.5361 139.296 46.9762 149.457 54.1317 155.064C64.1092 162.883 71.0415 166.767 78.2714 169.223C84.1576 171.222 96.5883 175.355 121.139 176.681C135.766 177.471 154.738 177.153 166.952 176.666C179.165 176.18 184.46 175.544 191.994 174.161C199.528 172.778 209.014 170.712 221.485 168.941C233.956 167.171 248.957 165.74 266.913 164.943C284.869 164.145 305.201 163.547 319.859 164.398C343.377 165.764 358.428 168.54 368.967 170.502C375.398 171.699 379.341 172.715 382.752 173.306C388.327 174.272 403.641 179.549 430.272 177.553C446.273 176.353 458.857 175.37 466.646 173.942C474.617 172.48 486.883 170.196 492.393 167.267C500.422 162.999 505.737 159.462 510.215 155.698C516.225 150.647 522.226 147.062 522.787 135.727C523.338 124.579 523.135 112.271 518.284 100.698C512.609 87.156 505.772 76.2057 500.916 69.4466C495.916 62.4853 494.742 58.651 480.39 48.0037C469.39 39.8427 466.185 35.276 447.416 29.1598C439.307 26.5174 427.287 20.2932 405.845 21.471C398.522 21.8733 391.473 23.6486 384.48 25.089C378.246 26.3729 373.027 27.7393 359.518 29.5163C351.479 30.5738 337.801 32.1636 320.393 32.8766C302.986 33.5896 282.452 33.6958 271.643 33.1873C259.713 32.626 246.419 31.2853 235.186 29.0105L235.143 29.0017C231.54 28.2721 220.414 26.0191 206.173 21.4469C193.966 17.5278 188.549 14.8282 181.007 11.8913C172.768 8.68277 158.851 3.657 138.32 1.94783C126.862 0.993949 113.113 0.540282 102.254 1.64914C83.3821 3.57617 70.6687 6.64726 63.0529 9.83417Z"
//             stroke="none"
//           />
//         </svg>
//       </div>
//     </div>
//   );
// };

// export default function HeroSection() {
//   return (
//     <div className="relative w-full min-h-screen flex flex-col items-center justify-center mx-auto bg-background ">
//       <section className=" mx-auto w-[90%] h-[80vh] px-6 flex flex-col lg:flex-row items-center gap-16">
//         <div className="flex-1 ">
//           <Title
//             title="Gentle protection for babies.
//  "
//             highlighter=""
//             desc=""
//           />

//           <div className="flex gap-4">

//           <Button
//             content="Explore Gentle Care"
//             link="/babyCareProduct"
//             buttonClassName="w-full lg:w-fit text-white"
//           />
//           <Button
//             content="Become a Distributor"
//             link="/babyCareProduct"
//             buttonClassName="w-full lg:w-fit text-black hover:text-white"
//             className="bg-transparent border-[#45685e] border text-black hover:bg-[#45685e]"
//           />
//           </div>
//           <div className="flex flex-col md:flex-row gap-6 pt-8 border-t border-foreground/10">
//             <div className="flex items-center gap-3">
//               <Icon
//                 icon="fluent:shield-task-16-filled"
//                 className="size-6 text-primary"
//               />
//               <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
//                 Trusted by mothers worldwide
//               </p>
//             </div>

//             <div className="flex items-center gap-3">
//               <Icon
//                 icon="solar:bag-heart-bold"
//                 className="size-6 text-primary"
//               />
//               <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
//                 Baby&apos;s comfort
//               </p>
//             </div>
//           </div>
//         </div>
//         <AnimatedHeroMedia />
// {/* Right Section */}

//      <div className="  w-1/4 ">
//   <div className="flex flex-col gap-4">
//     <div className="flex items-center gap-2">
//       <div className="bg-[#45685E] transition-transform hover:scale-103 rounded-full flex items-center justify-center text-white aspect-square w-16 shrink-0">
//         <ShieldCheck size={18} />
//       </div>
//       <p className="text-sm">
//         Feather-Soft Comfort
//       </p>
//     </div>

//     <div className="flex items-center gap-2">
//       <div className="bg-[#45685E] transition-transform hover:scale-103 rounded-full flex items-center justify-center text-white aspect-square w-16 shrink-0">
//         <Leaf size={18} />
//       </div>
//       <p className="text-sm">
//         All-Day Dryness
//       </p>
//     </div>

//     <div className="flex items-center gap-2">
//       <div className="bg-[#45685E] transition-transform hover:scale-103 rounded-full flex items-center justify-center text-white aspect-square w-16 shrink-0">
//         <Moon size={18} />
//       </div>
//       <p className="text-sm">
//         Leak-Free Nights
//       </p>
//     </div>
//   </div>
// </div>
//       </section>
//      <div className="text-3xl font-bold text-[#45685e] mb-8">
//         <h2>Parents scan for safety first, not features.</h2>
//      </div>
//   <FeaturePyramid/>

//    </div>

//   );
// }

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F6FBF9] font-sans">
    <section className="relative flex flex-col lg:flex-row min-h-screen">

  {/* ================= LEFT CONTENT ================= */}
  <div className="relative z-20 w-full lg:w-2/3 flex items-center px-6 lg:px-20 pt-24 lg:pt-32">
    <div className="max-w-xl space-y-6 lg:space-y-8">

      <p className="text-xs lg:text-sm tracking-wide text-gray-500 uppercase">
        Premium Baby Care Essentials
      </p>

      <h1 className="text-2xl lg:text-4xl font-extrabold leading-tight text-gray-900">
        Gentle protection for babies. Reliable margins for partners.
      </h1>

      <p className="text-sm lg:text-lg text-gray-600 leading-relaxed">
        Trusted by newly married couples around the world, focusing on
        comfort and safety for your heart and healthy baby.
      </p>

      <div className="flex items-center gap-4 lg:gap-5 pt-2 lg:pt-4 flex-wrap">
        <button className="bg-[#45685e] text-white px-6 lg:px-8 py-2.5 lg:py-3 rounded-full font-medium hover:shadow-xl hover:scale-105 transition duration-300 text-sm lg:text-base">
          Explore Essentials
        </button>

        <button className="outline outline-[#45685e] text-[#45685e] px-6 lg:px-8 py-2.5 lg:py-3 rounded-full font-medium hover:scale-105 transition duration-300 text-sm lg:text-base">
          Become a distributor
        </button>
      </div>

      <div className="flex items-center gap-3 lg:gap-4 pt-4 lg:pt-6">
        <div className="bg-[#45685e]/20 text-black px-4 lg:px-5 py-2.5 lg:py-3 rounded-full text-base lg:text-lg font-bold shadow-md">
          10K+
        </div>

        <p className="text-gray-600 text-xs lg:text-sm max-w-xs">
          Happy Customers
        </p>
      </div>
    </div>
  </div>

  {/* ================= CENTER VIDEO ================= */}
  <div className="relative lg:absolute lg:left-[58%] lg:bottom-20 lg:-translate-x-1/2 w-full flex justify-center mt-10 lg:mt-0 z-30">

    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-[200px] p-4 lg:p-6 overflow-hidden relative border-8 lg:border-12 border-[#f6faf8]"
    >
      <video
        src="/videos/babyPlaying.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-60 lg:w-80 lg:h-120 aspect-3/4 object-cover"
      />

      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
    </motion.div>
  </div>

  {/* ================= RIGHT SIDEBAR ================= */}
  <div className="relative w-full lg:w-1/3 bg-gradient-to-b from-[#45685e]/90 to-[#45685e] flex flex-col justify-center items-center mt-10 lg:mt-0">

    {/* Sidebar content */}
    <div className="absolute right-6 lg:right-20 space-y-6 lg:space-y-10 top-20 lg:top-auto">
      {[
        "Supreme Diaper",
        "Premium Softness",
        "Dryness Max",
        "New Product",
      ].map((name, i) => (
        <div key={i} className="flex items-center gap-3 lg:gap-4 group cursor-pointer">

          <div className="w-12 lg:w-16 h-12 lg:h-16 rounded-full bg-white overflow-hidden shadow-lg group-hover:scale-110 transition">
            <Image
              src="/images/diaper/supreme-diaper/supreme-diaper-pants-l.png"
              alt={name}
              width={64}
              height={64}
              className="object-cover"
            />
          </div>

          <p className="text-white text-xs lg:text-sm group-hover:text-pink-300 transition">
            {name}
          </p>
        </div>
      ))}
    </div>

    {/* Slider Buttons */}
    <div className="absolute bottom-6 lg:bottom-12 right-6 lg:right-40 flex gap-3 lg:gap-4">
      <button className="bg-white/90 backdrop-blur-md py-2 px-3 rounded-full hover:scale-110 transition shadow-md">
        ←
      </button>

      <button className="bg-white/90 backdrop-blur-md py-2 px-3 rounded-full hover:scale-110 transition shadow-md">
        →
      </button>
    </div>

    {/* Vertical Text */}
    <div className="hidden lg:block absolute left-0 -rotate-90 text-white/60 text-5xl font-bold tracking-widest select-none">
      BEST SELLER
    </div>

  </div>

</section>


    </div>
  );
}
