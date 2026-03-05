import Image from "next/image";
import Link from "next/link";
import type { ThemePreset } from "@/app/components/babyCareProductPage/theme";
import { hexToRgba } from "@/app/components/babyCareProductPage/theme";

type CarePromiseSectionProps = {
  theme: ThemePreset;
  conceptImages: string[];
};

const sectionTitle = "text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold tracking-tight leading-[1.08]";

export default function CarePromiseSection({ theme, conceptImages }: CarePromiseSectionProps) {
  const sideImage = conceptImages[0] || "/images/baby/baby31.png";

  return (
    <section className="immersive-section relative px-6 py-14 lg:px-10 lg:py-16">
      <div
        className="pointer-events-none absolute right-8 top-8 h-48 w-48 rounded-full blur-3xl"
        style={{ backgroundColor: hexToRgba(theme.accent, 0.14) }}
      />
      <div className="mx-auto max-w-6xl space-y-7 [perspective:1200px]">
        <div className="fx-rise">
          <h2 className={sectionTitle} style={{ color: theme.accent }}>
            A Promise You Can Lean On
          </h2>
          <p className="mt-2 text-sm md:text-base" style={{ color: hexToRgba(theme.accent, 0.72) }}>
            If the fit, comfort, or protection isn&apos;t right, we help you fix it fast.
          </p>
        </div>

        <div
          className="fx-rise grid gap-5 rounded-3xl border p-5 md:p-6 lg:grid-cols-12 lg:items-stretch"
          style={{
            borderColor: `${theme.border}66`,
            backgroundColor: hexToRgba(theme.pageBg, 0.86),
            boxShadow: `0 24px 54px ${hexToRgba(theme.accent, 0.12)}`,
          }}
        >
          <div className="fx-float flex h-full flex-col justify-between space-y-4 lg:col-span-7">
            <h3 className="text-xl font-semibold" style={{ color: theme.accent }}>
              Your Peace-Of-Mind Is Our Priority
            </h3>
            <p className="text-sm leading-relaxed md:text-base" style={{ color: hexToRgba(theme.accent, 0.74) }}>
              Parenthood has enough surprises. Your diapers should not be one of them. Reach out within 7 days and we
              will guide you to a better size or solution.
            </p>
            <ul className="space-y-2 text-sm" style={{ color: hexToRgba(theme.accent, 0.74) }}>
              <li>Fast support from care experts</li>
              <li>Help with sizing and comfort issues</li>
              <li>Clear, parent-first guidance</li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex rounded-full px-5 py-2.5 text-sm font-semibold text-white"
              style={{ backgroundColor: theme.accent }}
            >
              Talk to a care expert
            </Link>
          </div>

          <div className="lg:col-span-5">
            <div
              className="relative h-full min-h-[320px] overflow-hidden rounded-3xl border fx-float"
              style={{
                borderColor: `${theme.border}66`,
                boxShadow: `0 20px 42px ${hexToRgba(theme.accent, 0.12)}`,
              }}
            >
              <Image
                src={sideImage}
                alt="Caring parent and baby"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="fx-parallax object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
