import type { CSSProperties } from "react";
import type { Product } from "@/type/babyCareProductType";
import FaqSection from "@/app/components/common-ui/FaqSection";
import ProductCloseViewSection from "@/app/components/babyCareProductPage/ProductCloseViewSection";
import type { ThemePreset } from "@/app/components/babyCareProductPage/theme";
import { hexToRgba } from "@/app/components/babyCareProductPage/theme";

type FaqAndCloseViewSectionProps = {
  active: Product;
  theme: ThemePreset;
};

const sectionTitle = "text-[clamp(2rem,4.2vw,3.5rem)] font-semibold tracking-tight leading-[1.05]";
const bodyText = "text-sm md:text-base leading-relaxed";
const softCard = "rounded-3xl border p-5 sm:p-7 shadow-[0_16px_45px_rgba(0,0,0,0.08)]";

export default function FaqAndCloseViewSection({ active, theme }: FaqAndCloseViewSectionProps) {
  const cardStyle = {
    borderColor: `${theme.border}66`,
    backgroundColor: hexToRgba(theme.pageBg, 0.72),
  } as CSSProperties;

  return (
    <section className="px-6 pb-20 lg:px-10" style={{ backgroundColor: hexToRgba(theme.sectionTint, 0.14) }}>
      <div className="mx-auto max-w-6xl">
        <h2 className={sectionTitle} style={{ color: theme.accent }}>Questions You Ask With Love</h2>
        <p className={`mt-4 max-w-3xl ${bodyText}`} style={{ color: hexToRgba(theme.accent, 0.74) }}>
          Honest answers for the questions every caring parent asks before saying yes.
        </p>
        <div className={`${softCard} mt-8`} style={cardStyle}>
          <FaqSection
            product={active}
            faqs={active.faqs}
            questionColor={theme.accent}
            answerColor={hexToRgba(theme.accent, 0.76)}
          />
        </div>

        <div className={`${softCard} mt-6`} style={cardStyle}>
          <ProductCloseViewSection product={active} theme={theme} />
        </div>
      </div>
    </section>
  );
}
