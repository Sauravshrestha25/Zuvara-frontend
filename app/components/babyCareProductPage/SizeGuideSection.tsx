import type { Variant } from "@/type/babyCareProductType";
import type { ThemePreset } from "@/app/components/babyCareProductPage/theme";
import { hexToRgba } from "@/app/components/babyCareProductPage/theme";

type SizeGuideSectionProps = {
  theme: ThemePreset;
  variants: Variant[];
};

const sectionTitle = "text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold tracking-tight leading-[1.08]";

export default function SizeGuideSection({ theme, variants }: SizeGuideSectionProps) {
  return (
    <section className="immersive-section relative px-6 py-14 lg:px-10 lg:py-16">
      <div
        className="pointer-events-none absolute right-10 top-10 h-44 w-44 rounded-full blur-3xl"
        style={{ backgroundColor: hexToRgba(theme.chipBg, 0.42) }}
      />
      <div className="mx-auto max-w-6xl space-y-7 [perspective:1200px]">
        <div className="fx-rise flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className={sectionTitle} style={{ color: theme.accent }}>
              Find Their Perfect Little Fit
            </h2>
            <p className="mt-2 text-sm md:text-base" style={{ color: hexToRgba(theme.accent, 0.72) }}>
              Every baby grows at their own pace. Use this chart for a secure, comfortable fit.
            </p>
          </div>
          <span
            className="w-fit rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide"
            style={{
              borderColor: `${theme.border}66`,
              backgroundColor: hexToRgba(theme.chipBg, 0.55),
              color: theme.accent,
            }}
          >
            Standard Metric (KG)
          </span>
        </div>

        <div
          className="fx-rise overflow-hidden rounded-3xl border"
          style={{
            borderColor: `${theme.border}66`,
            backgroundColor: hexToRgba(theme.pageBg, 0.88),
            boxShadow: `0 24px 48px ${hexToRgba(theme.accent, 0.1)}`,
          }}
        >
          <div
            className="hidden grid-cols-12 border-b px-6 py-4 text-[11px] font-semibold uppercase tracking-wide md:grid"
            style={{
              borderColor: `${theme.border}44`,
              color: hexToRgba(theme.accent, 0.62),
              backgroundColor: hexToRgba(theme.containerBg, 0.32),
            }}
          >
            <div className="col-span-2">Size</div>
            <div className="col-span-3">Weight Range</div>
            <div className="col-span-7">Comfort Guidance</div>
          </div>

          <div>
            {variants.map((variant, idx) => (
              <div
                key={variant.id}
                className="fx-float grid grid-cols-1 gap-2 px-6 py-4 md:grid-cols-12 md:items-center"
                style={{
                  borderTop: idx === 0 ? "none" : `1px solid ${theme.border}33`,
                }}
              >
                <div className="md:col-span-2">
                  <span
                    className="inline-flex min-w-10 justify-center rounded-xl border px-3 py-1 text-sm font-semibold"
                    style={{
                      borderColor: `${theme.border}66`,
                      color: theme.accent,
                      backgroundColor: hexToRgba(theme.pageBg, 0.95),
                    }}
                  >
                    {variant.size || "-"}
                  </span>
                </div>

                <div className="md:col-span-3 text-sm font-medium" style={{ color: hexToRgba(theme.accent, 0.8) }}>
                  {variant.weight || "-"} kg
                </div>

                <div className="md:col-span-7 text-sm" style={{ color: hexToRgba(theme.accent, 0.7) }}>
                  {idx === 0
                    ? "Snug protection for the tiniest beginnings."
                    : idx === variants.length - 1
                      ? "Maximum stretch for active little explorers."
                      : "A flexible fit that supports movement and dry nights."}
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="fx-rise rounded-2xl border px-4 py-3 text-sm" style={{
          borderColor: `${theme.border}66`,
          backgroundColor: hexToRgba(theme.pageBg, 0.72),
          color: hexToRgba(theme.accent, 0.8),
        }}>
          <strong>Pro tip:</strong> If your baby is close to the upper weight limit, size up for better overnight absorbency.
        </p>
      </div>
    </section>
  );
}
