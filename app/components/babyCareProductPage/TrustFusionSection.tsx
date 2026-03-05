import Image from "next/image";
import type { ThemePreset } from "@/app/components/babyCareProductPage/theme";
import { hexToRgba } from "@/app/components/babyCareProductPage/theme";

type ComparisonRow = {
  label: string;
  zuvara: string;
  ordinary: string;
};

type TrustFusionSectionProps = {
  theme: ThemePreset;
  comparisonRows: ComparisonRow[];
};

const sectionTitle = "text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold tracking-tight leading-[1.08]";

export default function TrustFusionSection({ theme, comparisonRows }: TrustFusionSectionProps) {
  return (
    <section className="immersive-section relative px-6 py-14 lg:px-10 lg:py-16">
      <div
        className="pointer-events-none absolute left-1/2 top-6 h-44 w-60 -translate-x-1/2 rounded-full blur-3xl"
        style={{ backgroundColor: hexToRgba(theme.accent, 0.12) }}
      />
      <div className="mx-auto max-w-5xl space-y-7 [perspective:1200px]">
        <article
          className="fx-rise fx-float rounded-3xl border p-5 md:p-6"
          style={{
            borderColor: `${theme.border}66`,
            backgroundColor: hexToRgba(theme.sectionTint, 0.56),
            boxShadow: `0 18px 42px ${hexToRgba(theme.accent, 0.1)}`,
          }}
        >
          <div className="flex items-start gap-4 md:items-center">
            <div className="h-11 w-11 overflow-hidden rounded-full border" style={{ borderColor: `${theme.border}66` }}>
              <Image src="/images/baby/baby15.png" alt="Sarah M." width={44} height={44} className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: theme.accent }}>Sarah M. · Verified Parent</p>
              <p className="mt-1 text-sm md:text-base italic" style={{ color: hexToRgba(theme.accent, 0.78) }}>
                &quot;Finally, a night where I didn&apos;t wake up to a leak. Zuvara feels like a soft hug that works.&quot;
              </p>
            </div>
          </div>
        </article>

        <div className="fx-rise">
          <h2 className={sectionTitle} style={{ color: theme.accent }}>
            Why Zuvara Wins
          </h2>
          <p className="mt-2 text-sm" style={{ color: hexToRgba(theme.accent, 0.68) }}>
            A quick side-by-side look at the care your baby deserves.
          </p>
        </div>

        <div
          className="fx-rise overflow-hidden rounded-3xl border"
          style={{
            borderColor: `${theme.border}66`,
            backgroundColor: hexToRgba(theme.pageBg, 0.9),
            boxShadow: `0 24px 48px ${hexToRgba(theme.accent, 0.1)}`,
          }}
        >
          <div
            className="grid grid-cols-12 border-b px-4 py-3 text-[11px] font-semibold uppercase tracking-wide"
            style={{
              borderColor: `${theme.border}44`,
              backgroundColor: hexToRgba(theme.containerBg, 0.34),
              color: hexToRgba(theme.accent, 0.62),
            }}
          >
            <div className="col-span-6">Feature</div>
            <div className="col-span-3 text-center">Zuvara</div>
            <div className="col-span-3 text-center">Ordinary</div>
          </div>

          {comparisonRows.map((row, idx) => (
              <div
                key={row.label}
                className="fx-float grid grid-cols-12 items-center px-4 py-3 text-sm"
                style={{ borderTop: idx === 0 ? "none" : `1px solid ${theme.border}33` }}
              >
              <div className="col-span-6 font-medium" style={{ color: hexToRgba(theme.accent, 0.82) }}>
                {row.label}
              </div>
              <div className="col-span-3 text-center font-semibold" style={{ color: theme.accent }}>
                {row.zuvara}
              </div>
              <div className="col-span-3 text-center" style={{ color: hexToRgba(theme.accent, 0.62) }}>
                {row.ordinary}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
