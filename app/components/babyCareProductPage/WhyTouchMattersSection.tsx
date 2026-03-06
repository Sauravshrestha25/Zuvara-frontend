import Image from "next/image";
import { CloudMoon, Heart, ShieldCheck } from "lucide-react";
import type { ThemePreset } from "@/app/components/babyCareProductPage/theme";
import { hexToRgba } from "@/app/components/babyCareProductPage/theme";

type WhyTouchMattersSectionProps = {
  theme: ThemePreset;
};

const sectionTitle =
  "text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold tracking-tight leading-[1.08]";

export default function WhyTouchMattersSection({
  theme,
}: WhyTouchMattersSectionProps) {
  const cards = [
    {
      icon: ShieldCheck,
      title: "Purest Safety",
      body: "Dermatologically tested and toxin-free. Because their skin is 3x thinner than yours, it deserves 10x the care.",
    },
    {
      icon: CloudMoon,
      title: "Uninterrupted Dreams",
      body: "Protection that lasts through every nap. When they sleep better, you sleep better.",
    },
    {
      icon: Heart,
      title: "The Parent's Choice",
      body: "Feel proud of every care choice. You are giving them the best start, one dry night at a time.",
    },
  ];

  return (
    <section
      className="immersive-section relative overflow-hidden px-6 py-14 lg:px-0 lg:py-16"
      id="touch"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/baby/baby1.png"
          alt=""
          fill
          priority={false}
          aria-hidden="true"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(105deg, ${hexToRgba(theme.pageBg, 0.9)} 0%, ${hexToRgba(theme.pageBg, 0)} 95%, ${hexToRgba(theme.pageBg, 0.88)} 100%)`,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl space-y-8 perspective-1300px">
        <div className="max-w-3xl fx-rise">
          <h2 className={sectionTitle} style={{ color: theme.accent }}>
            Because Every
            <span
              className="italic font-light"
              style={{ color: hexToRgba(theme.accent, 0.56) }}
            >
              Touch Matters
            </span>
          </h2>

          <p
            className="mt-3 text-sm md:text-base"
            style={{ color: hexToRgba(theme.accent, 1) }}
          >
            We understand that your world revolves around theirs. Our diapers
            are more than protection, they are a soft embrace.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="space-y-3 w-1/2">
            {cards.map(({ icon: Icon, title, body }) => (
              <article
                key={title}
                className="fx-rise fx-float rounded-3xl border p-4 md:p-5 transition-transform duration-500 hover:-translate-y-1"
                style={{
                  borderColor: `${theme.border}66`,
                  backgroundColor: hexToRgba(theme.pageBg, 0.8),
                  boxShadow: `0 18px 40px ${hexToRgba(theme.accent, 0.12)}`,
                }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: theme.chipBg,
                      color: theme.accent,
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3
                      className="text-base font-semibold"
                      style={{ color: theme.accent }}
                    >
                      {title}
                    </h3>
                    <p
                      className="mt-1 text-sm leading-relaxed"
                      style={{ color: hexToRgba(theme.accent, 0.72) }}
                    >
                      {body}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className=" w-1/2 relative overflow-hidden">
            <div className="absolute  w-1/2 right-4 bottom-4">
              <p
                className="text-sm font-medium md:text-xl"
                style={{ color: theme.accent }}
              >
                &quot;Nothing touches your baby&apos;s skin except carefully
                selected safe materials.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
