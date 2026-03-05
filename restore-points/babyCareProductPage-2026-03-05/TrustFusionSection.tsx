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

export default function TrustFusionSection({ theme, comparisonRows }: TrustFusionSectionProps) {
  return (
    <section className="px-6 py-20 lg:px-10" style={{ backgroundColor: hexToRgba(theme.pageBg, 0.26) }}>
      <div className="mx-auto max-w-5xl">
        <div
          className="relative mb-20 p-8 md:p-12 rounded-[3rem] border overflow-hidden text-center"
          style={{
            backgroundColor: hexToRgba(theme.sectionTint, 0.55),
            borderColor: `${theme.border}66`,
          }}
        >
          <span className="absolute top-6 left-10 text-8xl font-serif select-none opacity-50" style={{ color: hexToRgba(theme.accent, 0.22) }}>
            &ldquo;
          </span>

          <div className="relative z-10 flex flex-col items-center">
            <div className="flex gap-1 mb-4" style={{ color: theme.accent }}>
              {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <blockquote
              className="text-xl md:text-2xl font-medium leading-relaxed italic max-w-3xl"
              style={{ color: hexToRgba(theme.accent, 0.82) }}
            >
              &apos;Finally, a night where I did not wake up to a leak. Zuvara feels different, it is like a soft hug
              that actually works. My baby&apos;s skin has never been this clear.&apos;
            </blockquote>

            <div className="mt-8 flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full border-2 shadow-sm overflow-hidden"
                style={{ borderColor: hexToRgba(theme.pageBg, 0.95) }}
              >
                <Image src="/images/baby/baby15.png" alt="Sarah M." width={48} height={48} className="object-cover" />
              </div>
              <div className="text-left">
                <p className="font-bold leading-none" style={{ color: hexToRgba(theme.accent, 0.92) }}>Sarah M.</p>
                <p className="text-xs mt-1 uppercase tracking-widest" style={{ color: hexToRgba(theme.accent, 0.62) }}>
                  Verified Parent
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight mb-2" style={{ color: theme.accent }}>
            Why Zuvara Wins
          </h2>
          <p className="text-sm" style={{ color: hexToRgba(theme.accent, 0.66) }}>
            A side-by-side look at the care your baby deserves.
          </p>
        </div>

        <div
          className="overflow-hidden rounded-[2.5rem] border shadow-xl"
          style={{
            backgroundColor: hexToRgba(theme.pageBg, 0.9),
            borderColor: `${theme.border}66`,
          }}
        >
          <div
            className="grid grid-cols-12 border-b text-[10px] font-black uppercase tracking-widest"
            style={{
              backgroundColor: hexToRgba(theme.containerBg, 0.32),
              borderColor: `${theme.border}44`,
              color: hexToRgba(theme.accent, 0.58),
            }}
          >
            <div className="col-span-6 p-5">Feature</div>
            <div className="col-span-3 p-5 text-center" style={{ backgroundColor: hexToRgba(theme.pageBg, 0.95), color: theme.accent }}>
              Zuvara
            </div>
            <div className="col-span-3 p-5 text-center">Ordinary</div>
          </div>

          <div className="divide-y" style={{ borderColor: `${theme.border}33` }}>
            {comparisonRows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-12 items-center group transition-colors"
                style={{ backgroundColor: hexToRgba(theme.pageBg, 0.34) }}
              >
                <div className="col-span-6 p-5 md:px-8">
                  <span className="text-sm font-bold" style={{ color: hexToRgba(theme.accent, 0.84) }}>
                    {row.label}
                  </span>
                </div>

                <div
                  className="col-span-3 p-5 flex flex-col items-center border-x"
                  style={{
                    borderColor: `${theme.border}44`,
                    backgroundColor: hexToRgba(theme.chipBg, 0.35),
                  }}
                >
                  <svg className="w-5 h-5 mb-1" style={{ color: theme.accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[10px] font-bold text-center" style={{ color: theme.accent }}>
                    {row.zuvara}
                  </span>
                </div>

                <div className="col-span-3 p-5 flex flex-col items-center" style={{ opacity: 0.6 }}>
                  <svg className="w-4 h-4 mb-1" style={{ color: hexToRgba(theme.accent, 0.56) }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-[10px] font-medium text-center" style={{ color: hexToRgba(theme.accent, 0.62) }}>
                    {row.ordinary}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs font-medium italic" style={{ color: hexToRgba(theme.accent, 0.56) }}>
            *Clinical comparisons based on 12-hour absorbency testing and skin friction analysis.
          </p>
        </div>
      </div>
    </section>
  );
}
