import Image from "next/image";
import type { ThemePreset } from "@/app/components/babyCareProductPage/theme";
import { hexToRgba } from "@/app/components/babyCareProductPage/theme";

type PhotoMosaicProps = {
  images: string[];
  className?: string;
  theme?: ThemePreset;
};

export default function PhotoMosaic({ images, className, theme }: PhotoMosaicProps) {
  return (
    <div className={`grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-6 ${className ?? ""}`}>
      {images.map((src, index) => {
        const tall = index % 5 === 1 || index % 7 === 0;
        const wide = index % 6 === 2;

        return (
          <div
            key={`${src}-${index}`}
            className={[
              "fx-float relative overflow-hidden rounded-2xl border transition-transform duration-500 hover:-translate-y-1",
              "shadow-[0_12px_30px_rgba(0,0,0,0.09)]",
              tall ? "row-span-2 min-h-[220px]" : "min-h-[110px]",
              wide ? "sm:col-span-2" : "sm:col-span-1",
            ].join(" ")}
            style={{
              borderColor: theme ? `${theme.border}88` : undefined,
              backgroundColor: theme ? hexToRgba(theme.pageBg, 0.86) : undefined,
            }}
          >
            <Image src={src} alt="Moodboard" fill className="object-cover" />
          </div>
        );
      })}
    </div>
  );
}
