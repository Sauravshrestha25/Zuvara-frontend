"use client";

import { useMediaQuery } from "react-responsive";

const statsLists = [
  {
    id: 1,
    title: "Absorbs 15x",
    desc: "Holds 15x its weight",
    icon: "/icons/absorption.png",
  },
  {
    id: 2,
    title: "Thin & Soft",
    desc: "Soft cotton surface",
    icon: "/icons/fabric.png",
  },
  {
    id: 3,
    title: "12 hour+",
    desc: "12-hour protection",
    icon: "/icons/12-hours.png",
  },
];

const StatsDivider = () => {
  const isSmallerDevice = useMediaQuery({ maxWidth: 1000 });

  return (
    <section className="py-8 bg-personalCare/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-6 max-w-7xl">
        {isSmallerDevice ? (
          <div className="grid grid-cols-2 gap-3 w-full">
            {statsLists.map((list) => (
              <div
                key={list.id}
                className={`flex flex-col items-center justify-center gap-2 px-4 py-4 bg-white rounded-xl shadow-md ${
                  list.id === 3 ? "col-span-2" : ""
                }`}
              >
                <div className="bg-personalCare size-16 rounded-full relative">
                  <img
                    src={list.icon}
                    alt={list.title}
                    className="size-10 invert absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
                  />
                </div>
                <p className="text-sm font-semibold text-center">
                  {list.title}
                </p>
                <p className="text-xs text-center text-zinc-500">{list.desc}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center gap-4 w-full">
            {statsLists.map((list) => (
              <div
                key={list.id}
                className="flex flex-col items-center justify-center gap-2 px-16 py-4 bg-white rounded-xl shadow-md"
              >
                <div className="bg-personalCare size-24 rounded-full relative">
                  <img
                    src={list.icon}
                    alt={list.title}
                    className="size-16 invert absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
                  />
                </div>
                <p className="text-xl font-semibold">{list.title}</p>
                <p className="text-sm">{list.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default StatsDivider;
