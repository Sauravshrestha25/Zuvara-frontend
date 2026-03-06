import Image from "next/image";
import { CloudMoon, Heart, ShieldCheck } from "lucide-react";
import type { ThemePreset } from "@/app/components/babyCareProductPage/theme";
import { hexToRgba } from "@/app/components/babyCareProductPage/theme";

type WhyTouchMattersSectionProps = {
  theme: ThemePreset;
};

const sectionTitle = "text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold tracking-tight leading-[1.08]";

export default function WhyTouchMattersSection({ theme }: WhyTouchMattersSectionProps) {
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
    <section className="immersive-section relative px-6 py-14 lg:px-10 lg:py-16">
      <div
        className="pointer-events-none absolute inset-x-10 top-8 h-40 rounded-full blur-3xl"
        style={{ backgroundColor: hexToRgba(theme.accent, 0.16) }}
      />
      <div className="mx-auto max-w-6xl space-y-8 [perspective:1300px]">
        <div className="max-w-3xl fx-rise">
          <h2 className={sectionTitle} style={{ color: theme.accent, textShadow: `0 8px 30px ${hexToRgba(theme.accent, 0.16)}` }}>
            Because Every Touch Matters
          </h2>
          <p className="mt-3 text-sm md:text-base" style={{ color: hexToRgba(theme.accent, 0.72) }}>
            We understand that your world revolves around theirs. Our diapers are more than protection, they are a soft
            embrace.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <div className="space-y-3">
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
                    style={{ backgroundColor: theme.chipBg, color: theme.accent }}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold" style={{ color: theme.accent }}>
                      {title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed" style={{ color: hexToRgba(theme.accent, 0.72) }}>
                      {body}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div
            className="fx-rise relative overflow-hidden rounded-3xl border"
            style={{
              borderColor: `${theme.border}66`,
              backgroundColor: hexToRgba(theme.pageBg, 0.84),
              boxShadow: `0 24px 50px ${hexToRgba(theme.accent, 0.14)}`,
            }}
          >
            <Image
              src="/images/baby/baby1.png"
              alt="Happy baby in a comfortable diaper"
              width={900}
              height={700}
              className="fx-parallax h-full min-h-[300px] w-full object-cover"
            />
            <div
              className="absolute left-4 right-4 bottom-4 rounded-2xl border p-4 backdrop-blur-sm"
              style={{
                backgroundColor: hexToRgba(theme.pageBg, 0.78),
                borderColor: `${theme.border}66`,
              }}
              >
                <p className="text-sm italic md:text-base" style={{ color: theme.accent }}>
                  &quot;Nothing touches your baby&apos;s skin except carefully selected safe materials.&quot;
                </p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
