import React from "react";
import SectionHeading from "../common-ui/SectionHeading";
import Button from "../common-ui/Button";
import Link from "next/link";

const AboutProduct = () => {
  return (
    <section className="bg-white min-h-screen relative">
      <div className="container mx-auto pt-16 px-4 sm:px-6 lg:px-6 max-w-7xl min-h-screen flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* left section */}
          <div className="lg:w-1/2 flex flex-col gap-8">
            <div className="">
              <SectionHeading
                title="Our"
                highlight="Products"
                titleClassName="text-personalCare!"
                highlighterColor="text-personalCare"
              />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet porro omnis tempora, fugit asperiores nesciunt dolorum
                eos fugiat nulla sapiente unde recusandae ducimus error,
                assumenda at esse. Asperiores, veniam iusto.
              </p>
            </div>
            <Link
              href="/personalCareProduct/period-panties"
              className="py-4 flex flex-col justify-between gap-4 translate-y-0 hover:-translate-y-2 transition-all duration-400! will-change-transform"
            >
              <div className="w-full h-full flex justify-center bg-personalCare py-8">
                <img
                  src="/images/personalCare/period-panties.png"
                  alt="period panties"
                  className="w-100 h-60"
                />
              </div>
              <div className="">
                <p className="text-2xl font-semibold">Period Panties</p>
                <p className="flex flex-col italic">
                  <span>Period Pads - Pant Style</span>
                </p>
              </div>
            </Link>
          </div>

          {/* right section */}
          <div className="lg:w-1/2 flex flex-col justify-between translate-y-0 hover:-translate-y-2 transition-all duration-400! will-change-transform">
            <Link
              href="/personalCareProduct/period-panties"
              className="py-4 flex flex-col justify-between gap-4 translate-y-0 hover:-translate-y-2 transition-all duration-400! will-change-transform"
            >
              <div className="w-full h-full flex justify-center items-center bg-personalCare py-8">
                <img
                  src="/images/personalCare/sanitary-pad.png"
                  alt="sanitary pad"
                  className="w-80 h-90"
                />
              </div>
              <div className="">
                <p className="text-2xl font-semibold">Sanitary Pads</p>
                <p className="flex flex-col italic">
                  <span>The Incredible Sanitary Pads</span>
                  <span>Thinner, Softer, Simply Better</span>
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProduct;
