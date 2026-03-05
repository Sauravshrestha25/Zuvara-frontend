import Image from "next/image";
import PhotoMosaic from "@/app/components/babyCareProductPage/PhotoMosaic";
import type { ThemePreset } from "@/app/components/babyCareProductPage/theme";
import { hexToRgba } from "@/app/components/babyCareProductPage/theme";

type ComfortDetailsSectionProps = {
  theme: ThemePreset;
  highlights: string[];
  moodboardImages: string[];
};

const sectionTitle = "text-[clamp(2rem,4.2vw,3.5rem)] font-semibold tracking-tight leading-[1.05]";

export default function ComfortDetailsSection({ theme, highlights, moodboardImages }: ComfortDetailsSectionProps) {
  return (
    <section
      className="relative px-6 py-24 lg:px-10 overflow-hidden"
      style={{ backgroundColor: hexToRgba(theme.pageBg, 0.45) }}
    >
      <section
        className="relative px-6 py-24 lg:px-10 overflow-hidden"
        style={{ backgroundColor: hexToRgba(theme.sectionTint, 0.3) }}
      >
        <div className="absolute inset-0 -z-20" style={{ backgroundColor: hexToRgba(theme.sectionTint, 0.5) }} />

        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className={`${sectionTitle} text-4xl lg:text-5xl tracking-tight`} style={{ color: theme.accent }}>
                Small Details,{" "}
                <br />{" "}
                <span className="font-light italic" style={{ color: hexToRgba(theme.accent, 0.55) }}>
                  Big Comfort.
                </span>
              </h2>
            </div>
            <div className="flex gap-4">
              <div
                className="px-5 py-3 rounded-full shadow-sm border flex items-center gap-2"
                style={{
                  backgroundColor: hexToRgba(theme.pageBg, 0.88),
                  borderColor: `${theme.border}66`,
                }}
              >
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: theme.accent }} />
                <span className="text-sm font-medium" style={{ color: hexToRgba(theme.accent, 0.74) }}>
                  Dermatologically Tested
                </span>
              </div>
              <div
                className="px-5 py-3 rounded-full shadow-sm border flex items-center gap-2"
                style={{
                  backgroundColor: hexToRgba(theme.pageBg, 0.88),
                  borderColor: `${theme.border}66`,
                }}
              >
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: theme.accent }} />
                <span className="text-sm font-medium" style={{ color: hexToRgba(theme.accent, 0.74) }}>
                  12hr Leak Guard
                </span>
              </div>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 mb-16">
            <div className="lg:col-span-8 relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 rounded-[2.5rem] pointer-events-none" />
              <div
                className="rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]"
                style={{ background: `radial-gradient(circle at center, ${hexToRgba(theme.accent, 0.1)}, transparent)` }}
              >
                <PhotoMosaic images={moodboardImages} className="aspect-[16/9] lg:aspect-auto" theme={theme} />
              </div>

              <div
                className="absolute -bottom-6 -left-6 z-20 p-4 rounded-3xl shadow-xl flex items-center gap-4 border"
                style={{
                  backgroundColor: hexToRgba(theme.pageBg, 0.9),
                  borderColor: `${theme.border}66`,
                }}
              >
                <div className="w-12 h-12 rounded-2xl overflow-hidden">
                  <Image src="/images/baby/baby6.png" alt="Baby Smile" width={48} height={48} className="object-cover" />
                </div>
                <p className="text-sm font-semibold pr-4" style={{ color: theme.accent }}>
                  Designed for <br />More Giggles
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-6">
              <div
                className="p-8 rounded-[2rem] border shadow-sm flex-1 flex flex-col justify-center"
                style={{
                  backgroundColor: hexToRgba(theme.pageBg, 0.86),
                  borderColor: `${theme.border}66`,
                }}
              >
                <h3 className="text-xl font-bold mb-3" style={{ color: theme.accent }}>Gentle Protection</h3>
                <p className="leading-relaxed" style={{ color: hexToRgba(theme.accent, 0.72) }}>
                  Ultra-soft layers designed to reduce friction. Because their skin is 3x thinner than yours.
                </p>
              </div>
              <div
                className="p-8 rounded-[2rem] border shadow-sm flex-1 flex flex-col justify-center"
                style={{
                  backgroundColor: hexToRgba(theme.pageBg, 0.86),
                  borderColor: `${theme.border}66`,
                }}
              >
                <h3 className="text-xl font-bold mb-3" style={{ color: theme.accent }}>Nap-Time Security</h3>
                <p className="leading-relaxed" style={{ color: hexToRgba(theme.accent, 0.72) }}>
                  Advanced absorbency for longer dryness, helping you rest while they dream.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, idx) => (
              <article
                key={item}
                className="group relative p-3 rounded-[2.2rem] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border"
                style={{
                  backgroundColor: hexToRgba(theme.pageBg, 0.9),
                  borderColor: `${theme.border}66`,
                }}
              >
                <div className="relative aspect-square overflow-hidden rounded-[1.8rem]">
                  <Image
                    src={`/images/diaper/supreme-diaper/${idx + 1}.jpg`}
                    alt={item}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4">
                  <p className="text-center font-bold tracking-tight transition-colors" style={{ color: hexToRgba(theme.accent, 0.86) }}>
                    {item}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
