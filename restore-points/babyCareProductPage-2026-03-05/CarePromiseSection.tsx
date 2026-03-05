import Image from "next/image";
import Link from "next/link";
import PhotoMosaic from "@/app/components/babyCareProductPage/PhotoMosaic";
import type { ThemePreset } from "@/app/components/babyCareProductPage/theme";
import { hexToRgba } from "@/app/components/babyCareProductPage/theme";

type CarePromiseSectionProps = {
  theme: ThemePreset;
  conceptImages: string[];
};

const sectionTitle = "text-[clamp(2rem,4.2vw,3.5rem)] font-semibold tracking-tight leading-[1.05]";

export default function CarePromiseSection({ theme, conceptImages }: CarePromiseSectionProps) {
  return (
    <section className="px-6 py-24 lg:px-10" style={{ backgroundColor: hexToRgba(theme.sectionTint, 0.22) }}>
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className={`${sectionTitle} text-4xl lg:text-5xl font-bold tracking-tight mb-6`} style={{ color: theme.accent }}>
            A Promise You Can{" "}
            <span className="font-light italic" style={{ color: hexToRgba(theme.accent, 0.56) }}>
              Lean On.
            </span>
          </h2>
          <div
            className="relative rounded-[3.5rem] overflow-hidden shadow-2xl border group"
            style={{ borderColor: `${theme.border}66` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 z-10 pointer-events-none" />
            <PhotoMosaic
              images={conceptImages}
              className="aspect-[21/9] lg:aspect-[3/1] transition-transform duration-1000 group-hover:scale-[1.02]"
              theme={theme}
            />
          </div>
        </div>

        <div
          className="relative overflow-hidden rounded-[3rem] border p-8 md:p-12 lg:p-16 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] lg:grid lg:grid-cols-12 lg:items-center lg:gap-16"
          style={{
            borderColor: `${theme.border}44`,
            background: `linear-gradient(135deg, ${hexToRgba(theme.sectionTint, 0.72)} 0%, ${hexToRgba(theme.pageBg, 0.88)} 100%)`,
          }}
        >
          <div
            className="absolute -bottom-20 -left-20 w-64 h-64 blur-[80px] opacity-20 rounded-full"
            style={{ backgroundColor: theme.accent }}
          />

          <div className="relative z-10 lg:col-span-7 space-y-8">
            <div>
              <span
                className="inline-block px-4 py-1.5 rounded-full shadow-sm text-[10px] font-black uppercase tracking-[0.2em] mb-6"
                style={{
                  color: theme.accent,
                  backgroundColor: hexToRgba(theme.pageBg, 0.9),
                }}
              >
                The Zuvara Guarantee
              </span>
              <h3 className="text-4xl md:text-5xl font-bold leading-[1.1]" style={{ color: theme.accent }}>
                Your Peace-Of-Mind <br /> Is Our Priority.
              </h3>
              <p className="mt-6 text-lg leading-relaxed max-w-xl" style={{ color: hexToRgba(theme.accent, 0.74) }}>
                Parenthood has enough surprises. Your diapers should not be one of them. If the fit, comfort, or
                protection is not perfect, reach out within 7 days.
                <span className="block mt-4 font-semibold" style={{ color: hexToRgba(theme.accent, 0.88) }}>
                  We are here to guide you, support you, and make it right.
                </span>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-lg"
                style={{ backgroundColor: theme.accent }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                Talk to a care expert
              </Link>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2"
                      style={{
                        borderColor: hexToRgba(theme.pageBg, 0.95),
                        backgroundColor: theme.chipBg,
                      }}
                    />
                  ))}
                </div>
                <span className="text-xs font-bold uppercase tracking-widest pl-2" style={{ color: hexToRgba(theme.accent, 0.6) }}>
                  Experts Online Now
                </span>
              </div>
            </div>
          </div>

          <div className="relative mt-12 lg:mt-0 lg:col-span-5">
            <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square overflow-hidden rounded-[2.5rem] shadow-2xl rotate-2 transition-transform duration-700 hover:rotate-0">
              <Image src="/images/baby/baby31.png" alt="Caring parent and baby" fill className="object-cover" />
            </div>

            <div
              className="absolute -bottom-6 -right-6 p-6 rounded-3xl shadow-xl border hidden md:block"
              style={{
                backgroundColor: hexToRgba(theme.pageBg, 0.9),
                borderColor: `${theme.border}66`,
              }}
            >
              <p className="text-3xl font-black" style={{ color: theme.accent }}>100%</p>
              <p className="text-[10px] uppercase font-bold tracking-widest" style={{ color: hexToRgba(theme.accent, 0.6) }}>
                Response Rate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
