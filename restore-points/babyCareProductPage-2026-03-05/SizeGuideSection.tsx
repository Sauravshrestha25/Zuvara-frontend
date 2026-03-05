import type { Variant } from "@/type/babyCareProductType";
import type { ThemePreset } from "@/app/components/babyCareProductPage/theme";
import { hexToRgba } from "@/app/components/babyCareProductPage/theme";

type SizeGuideSectionProps = {
  theme: ThemePreset;
  variants: Variant[];
};

const sectionTitle = "text-[clamp(2rem,4.2vw,3.5rem)] font-semibold tracking-tight leading-[1.05]";

export default function SizeGuideSection({ theme, variants }: SizeGuideSectionProps) {
  return (
    <section
      className="relative px-6 py-24 lg:px-10 overflow-hidden"
      style={{ backgroundColor: hexToRgba(theme.sectionTint, 0.2) }}
    >
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 blur-[100px] opacity-10 rounded-full"
        style={{ backgroundColor: theme.accent }}
      />

      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className={`${sectionTitle} text-4xl lg:text-5xl font-bold tracking-tight`} style={{ color: theme.accent }}>
              Find Their{" "}
              <span className="font-light italic" style={{ color: hexToRgba(theme.accent, 0.55) }}>
                Perfect Little Fit.
              </span>
            </h2>
            <p className="mt-4 text-lg" style={{ color: hexToRgba(theme.accent, 0.72) }}>
              Every baby grows at their own pace. Use our guide to ensure a gap-free, leak-proof hug.
            </p>
          </div>

          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border"
            style={{
              backgroundColor: hexToRgba(theme.pageBg, 0.88),
              borderColor: `${theme.border}66`,
            }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: theme.accent }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: hexToRgba(theme.accent, 0.6) }}>
              Standard Metric (KG)
            </span>
          </div>
        </div>

        <div
          className="relative overflow-hidden rounded-[2.5rem] border shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)]"
          style={{
            backgroundColor: hexToRgba(theme.pageBg, 0.92),
            borderColor: `${theme.border}66`,
          }}
        >
          <div
            className="hidden md:grid grid-cols-12 gap-4 px-10 py-6 border-b"
            style={{
              borderColor: `${theme.border}44`,
              backgroundColor: hexToRgba(theme.containerBg, 0.35),
            }}
          >
            <div className="col-span-2 text-xs font-black uppercase tracking-[0.2em]" style={{ color: hexToRgba(theme.accent, 0.6) }}>Size</div>
            <div className="col-span-3 text-xs font-black uppercase tracking-[0.2em]" style={{ color: hexToRgba(theme.accent, 0.6) }}>Weight Range</div>
            <div className="col-span-7 text-xs font-black uppercase tracking-[0.2em]" style={{ color: hexToRgba(theme.accent, 0.6) }}>Comfort Guidance</div>
          </div>

          <div className="divide-y" style={{ borderColor: `${theme.border}33` }}>
            {variants.map((variant, idx) => (
              <div
                key={variant.id}
                className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-4 px-8 md:px-10 py-8 md:py-10 transition-all duration-300 items-center"
                style={{ backgroundColor: hexToRgba(theme.pageBg, 0.38) }}
              >
                <div className="col-span-2">
                  <div
                    className="inline-flex h-12 w-12 items-center justify-center rounded-2xl shadow-sm border group-hover:scale-110 transition-all duration-300"
                    style={{
                      backgroundColor: hexToRgba(theme.pageBg, 0.95),
                      borderColor: `${theme.border}66`,
                    }}
                  >
                    <span className="text-xl font-bold" style={{ color: theme.accent }}>{variant.size || "-"}</span>
                  </div>
                </div>

                <div className="col-span-3">
                  <p className="text-lg font-bold" style={{ color: hexToRgba(theme.accent, 0.86) }}>
                    {variant.weight || "-"}{" "}
                    <span className="text-sm font-medium italic font-serif" style={{ color: hexToRgba(theme.accent, 0.56) }}>
                      kg
                    </span>
                  </p>
                  <span className="md:hidden text-[10px] uppercase tracking-widest" style={{ color: hexToRgba(theme.accent, 0.56) }}>
                    Weight Class
                  </span>
                </div>

                <div className="col-span-5 leading-relaxed text-md" style={{ color: hexToRgba(theme.accent, 0.72) }}>
                  {idx === 0
                    ? "Snug protection for the tiniest beginnings."
                    : idx === variants.length - 1
                      ? "Maximum stretch for active little explorers."
                      : "A flexible fit that supports natural movement and dry nights."}
                </div>

                <div className="col-span-2 text-right hidden md:block">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span
                      className="text-[10px] font-bold uppercase tracking-tighter px-3 py-1 rounded-full border"
                      style={{ borderColor: theme.accent, color: theme.accent }}
                    >
                      Optimal Choice
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="mt-8 p-6 rounded-4xl border flex flex-col md:flex-row items-center gap-6"
          style={{
            backgroundColor: hexToRgba(theme.sectionTint, 0.6),
            borderColor: `${theme.border}66`,
          }}
        >
          <div
            className="h-12 w-12 shrink-0 rounded-2xl flex items-center justify-center shadow-sm"
            style={{ backgroundColor: hexToRgba(theme.pageBg, 0.95) }}
          >
            <svg className="w-6 h-6" style={{ color: theme.accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: hexToRgba(theme.accent, 0.86) }}>
            <strong>Pro-Tip for Parents:</strong> If your baby is nearing the upper weight limit of their current
            size, it might be time to size up for maximum overnight absorbency.
          </p>
        </div>
      </div>
    </section>
  );
}
