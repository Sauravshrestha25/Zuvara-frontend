import Image from "next/image";
import PhotoMosaic from "@/app/components/babyCareProductPage/PhotoMosaic";
import type { ThemePreset } from "@/app/components/babyCareProductPage/theme";
import { hexToRgba } from "@/app/components/babyCareProductPage/theme";

type ComfortDetailsSectionProps = {
  theme: ThemePreset;
  highlights: string[];
  moodboardImages: string[];
};

const sectionTitle = "text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold tracking-tight leading-[1.08]";

export default function ComfortDetailsSection({ theme, highlights, moodboardImages }: ComfortDetailsSectionProps) {
  return (
    <section className="px-6 py-14 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className={sectionTitle} style={{ color: theme.accent }}>
              Small Details, <span style={{ color: hexToRgba(theme.accent, 0.56) }}>Big Comfort.</span>
            </h2>
            <p className="mt-3 text-sm md:text-base" style={{ color: hexToRgba(theme.accent, 0.72) }}>
              Designed to feel light, fit better, and stay comfortable through active and sleepy moments.
            </p>
          </div>
          <div className="flex gap-3 text-xs font-semibold uppercase tracking-wide md:text-sm">
            {["Dermatologically Tested", "12hr Leak Guard"].map((chip) => (
              <span
                key={chip}
                className="rounded-full border px-4 py-2"
                style={{
                  borderColor: `${theme.border}66`,
                  backgroundColor: hexToRgba(theme.chipBg, 0.55),
                  color: theme.accent,
                }}
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-12">
          <div
            className="overflow-hidden rounded-3xl border lg:col-span-8"
            style={{
              borderColor: `${theme.border}66`,
              backgroundColor: hexToRgba(theme.pageBg, 0.82),
            }}
          >
            <PhotoMosaic images={moodboardImages} className="p-4" theme={theme} />
          </div>

          <div className="space-y-4 lg:col-span-4">
            {[{
              title: "Gentle Protection",
              body: "Ultra-soft layers designed to reduce friction where baby skin needs comfort most.",
            }, {
              title: "Nap-Time Security",
              body: "Advanced absorbency for longer dryness, helping you rest while they dream.",
            }].map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border p-5"
                style={{
                  borderColor: `${theme.border}66`,
                  backgroundColor: hexToRgba(theme.pageBg, 0.84),
                }}
              >
                <h3 className="text-base font-semibold" style={{ color: theme.accent }}>
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: hexToRgba(theme.accent, 0.72) }}>
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, idx) => (
            <article
              key={item}
              className="overflow-hidden rounded-3xl border"
              style={{
                borderColor: `${theme.border}66`,
                backgroundColor: hexToRgba(theme.pageBg, 0.86),
              }}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={`/images/diaper/supreme-diaper/${idx + 1}.jpg`}
                  alt={item}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="p-4 text-sm font-semibold leading-snug" style={{ color: theme.accent }}>
                {item}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
