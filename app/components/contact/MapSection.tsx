"use client";

import { contactLists, socialLinks } from "@/constants";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React, { useState } from "react";
import { useSection } from "@/app/providers/SectionProvider";
import { cn } from "@/lib/utils";

const MapSection = () => {
  const { activeSection } = useSection();
  const isPersonal = activeSection === "personal";

  return (
    <section className="">
      <div className="lg:h-[80vh] container mx-auto pt-8 lg:pt-0 px-4 lg:px-6 max-w-7xl flex flex-col lg:flex-row relative">
        {/* location card section */}
        <div
          className={cn(
            "lg:w-1/3 lg:h-fit my-auto rounded-xl flex lg:flex-col gap-2 lg:gap-4 overflow-hidden",
            isPersonal ? "bg-personalCare/20" : "bg-foreground/20",
          )}
        >
          <div className="">
            <img
              src="/images/baby/baby19.png"
              alt=""
              className="w-full h-60 object-cover hidden lg:block"
            />
          </div>
          <div className="h-full flex flex-col justify-between gap-4 p-4">
            <div className="space-y-4">
              <p className="text-lg md:text-xl xl:text-2xl font-semibold">
                WebX Nepal Office
              </p>

              <div className="flex flex-col gap-4">
                {contactLists.map((contact) => (
                  <Link
                    href={contact.link}
                    key={contact.id}
                    className="flex items-center gap-4"
                  >
                    <Icon
                      icon={contact.icon}
                      className={cn(
                        "size-6 xl:size-8",
                        isPersonal ? "text-black" : "text-black",
                      )}
                    />
                    <p className="xl:text-lg hover:underline">{contact.desc}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* <div className="flex items-center justify-center gap-8">
              {socialLinks.map((social) => (
                <SocialIcon key={social.id} social={social} />
              ))}
            </div> */}

            <Link
              href="https://www.google.com/maps/place/WebX+Nepal+Pvt.+Ltd./@27.7191762,85.3216617,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb19db1ac7cfc1:0x3f3557a1377b8d05!8m2!3d27.7191762!4d85.3242366!16s%2Fg%2F11vzyb5zkx?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "rounded-full py-3 px-6 text-background text-center cursor-pointer transition-colors duration-300",
                isPersonal ? "bg-personalCare text-white" : "bg-babyCare",
              )}
            >
              Take me there
            </Link>
          </div>
        </div>

        <div className="lg:w-2/3 h-full relative overflow-hidden">
          <Link
            href="https://www.google.com/maps/place/WebX+Nepal+Pvt.+Ltd./@27.7191762,85.3216617,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb19db1ac7cfc1:0x3f3557a1377b8d05!8m2!3d27.7191762!4d85.3242366!16s%2Fg%2F11vzyb5zkx?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/home/location.png"
              alt="location 1"
              className="w-full h-full object-cover object-right scale-100 hover:scale-[1.08] transition-all duration-1000! will-change-transform"
            />
          </Link>
          <div
            className={cn(
              "absolute inset-0 w-full h-full pointer-events-none transition-colors duration-500",
              isPersonal
                ? "bg-linear-to-b from-ternary via-transparent to-ternary"
                : "bg-linear-to-b from-babyCare via-transparent to-babyCare",
            )}
          />
          <div
            className={cn(
              "absolute inset-0 w-full h-full pointer-events-none transition-colors duration-500",
              isPersonal
                ? "bg-linear-to-r from-ternary via-transparent to-ternary"
                : "bg-linear-to-r from-babyCare via-transparent to-babyCare",
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;

const SocialIcon = ({ social }: { social: any }) => {
  // const [isHovered, setIsHovered] = useState(false);
  // const { activeSection } = useSection();
  // const isPersonal = activeSection === "personal";

  return (
    <Link
      href={social.link}
      target="_blank"
      rel="noopener noreferrer"
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
    >
      <Icon
        // icon={isHovered ? social.fillIcon : social.icon}
        icon={social.icon}
        className={cn(
          "size-6 xl:size-8 cursor-pointer scale-100 hover:scale-[1.2] transition-all duration-500",
        )}
      />
    </Link>
  );
};
