import Image from "next/image";
import { CloudMoon, Heart, ShieldCheck } from "lucide-react";
import type { ThemePreset } from "@/app/components/babyCareProductPage/theme";
import { hexToRgba } from "@/app/components/babyCareProductPage/theme";

type WhyTouchMattersSectionProps = {
  theme: ThemePreset;
};

const sectionTitle = "text-[clamp(2rem,4.2vw,3.5rem)] font-semibold tracking-tight leading-[1.05]";
const bodyText = "text-sm md:text-base leading-relaxed text-zinc-700";

export default function WhyTouchMattersSection({ theme }: WhyTouchMattersSectionProps) {
  return (
    <section
      className="relative px-6 py-20 lg:px-10 lg:py-32 overflow-hidden"
      style={{ backgroundColor: hexToRgba(theme.sectionTint, 0.38) }}
    >
      <div
        className="absolute top-0 right-0 -z-10 h-64 w-64 rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: theme.accent }}
      />

      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className={`${sectionTitle} text-4xl lg:text-5xl tracking-tight`} style={{ color: theme.accent }}>
            Because Every Touch Matters
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg" style={{ color: hexToRgba(theme.accent, 0.72) }}>
            We understand that your world revolves around theirs. Our diapers are more than protection, they are a
            soft embrace.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 space-y-8">
            <div
              className="group flex gap-5 p-4 rounded-2xl transition-all duration-300"
              style={{ backgroundColor: hexToRgba(theme.pageBg, 0.65) }}
            >
              <div
                className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: theme.chipBg, color: theme.accent }}
              >
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: theme.accent }}>Purest Safety</h3>
                <p className={bodyText}>
                  Dermatologically tested and toxin-free. Because their skin is 3x thinner than yours, it deserves
                  10x the care.
                </p>
              </div>
            </div>

            <div
              className="group flex gap-5 p-4 rounded-2xl transition-all duration-300"
              style={{ backgroundColor: hexToRgba(theme.pageBg, 0.65) }}
            >
              <div
                className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: theme.chipBg, color: theme.accent }}
              >
                <CloudMoon size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: theme.accent }}>Uninterrupted Dreams</h3>
                <p className={bodyText}>
                  Protection that lasts through every nap. When they sleep better, you sleep better.
                </p>
              </div>
            </div>

            <div
              className="group flex gap-5 p-4 rounded-2xl transition-all duration-300"
              style={{ backgroundColor: hexToRgba(theme.pageBg, 0.65) }}
            >
              <div
                className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: theme.chipBg, color: theme.accent }}
              >
                <Heart size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: theme.accent }}>The Parent&apos;s Choice</h3>
                <p className={bodyText}>
                  Feel proud of every care choice. You are giving them the best start, one dry night at a time.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl">
              <Image
                src="/images/baby/baby1.png"
                alt="Happy baby in a comfortable diaper"
                width={800}
                height={600}
                className="w-full object-cover aspect-[4/3] transform hover:scale-105 transition-transform duration-700"
              />
              <div
                className="absolute bottom-6 left-6 right-6 backdrop-blur-md p-6 rounded-2xl border"
                style={{
                  backgroundColor: hexToRgba(theme.pageBg, 0.76),
                  borderColor: `${theme.border}88`,
                }}
              >
                <p className="text-lg font-medium leading-relaxed italic" style={{ color: theme.accent }}>
                  &quot;Nothing touches your baby&apos;s skin except carefully selected safe materials.&quot;
                </p>
              </div>
            </div>

            <div
              className="absolute -bottom-6 -left-6 -z-10 w-48 h-48 rounded-3xl overflow-hidden border-4 shadow-lg"
              style={{ borderColor: hexToRgba(theme.pageBg, 0.95) }}
            >
              <Image src="/images/baby/baby5.png" alt="Baby's soft touch" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
