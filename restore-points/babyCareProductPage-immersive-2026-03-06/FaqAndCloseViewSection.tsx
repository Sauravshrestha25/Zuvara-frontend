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

const sectionTitle = "text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold tracking-tight leading-[1.08]";
const softCard = "rounded-3xl border p-4 md:p-5 shadow-[0_12px_32px_rgba(0,0,0,0.07)]";

export default function FaqAndCloseViewSection({ active, theme }: FaqAndCloseViewSectionProps) {
  const cardStyle = {
    borderColor: `${theme.border}66`,
    backgroundColor: hexToRgba(theme.pageBg, 0.78),
  } as CSSProperties;

  return (
    <section className="px-6 pb-14 pt-6 lg:px-10 lg:pb-16">
      <div className="mx-auto max-w-6xl space-y-6">
        <div>
          <h2 className={sectionTitle} style={{ color: theme.accent }}>
            Questions You Ask With Love
          </h2>
          <p className="mt-2 text-sm md:text-base" style={{ color: hexToRgba(theme.accent, 0.72) }}>
            Honest answers for the questions every caring parent asks before saying yes.
          </p>
        </div>

        <div className={softCard} style={cardStyle}>
          <FaqSection
            product={active}
            faqs={active.faqs}
            questionColor={theme.accent}
            answerColor={hexToRgba(theme.accent, 0.76)}
          />
        </div>

        <div className={softCard} style={cardStyle}>
          <ProductCloseViewSection product={active} theme={theme} />
        </div>
      </div>
    </section>
  );
}
