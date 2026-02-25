import React from "react";
import { Product } from "@/type/babyCareProductType";
import { Star } from "lucide-react";

// Accepts an optional `theme` object so the parent can fully control colors.
interface ReviewSectionProps {
  product: Product;
  className?: string;
  theme?: {
    bg: string;
    headingColor: string;
    subtleText: string;
    cardBg: string;
    cardBorder: string;
    pageText: string;
    starColor: string;
  };
}

const ReviewSection = ({ product, className, theme }: ReviewSectionProps) => {
  // Fallback to product colors when no theme is provided (standalone usage)
  const headingColor = theme?.headingColor || product.background || "#000000";
  const subtleText = theme?.subtleText || "#52525b";
  const cardBg = theme?.cardBg || "#f4f4f5";
  const cardBorder = theme?.cardBorder || "#e4e4e7";
  const pageText = theme?.pageText || "#18181b";
  const starColor = theme?.starColor || "#eab308";

  return (
    <div className={`py-4 lg:py-8 space-y-4 lg:space-y-8 ${className ?? ""}`}>
      <div className="flex flex-col gap-2">
        <h2
          className="text-lg lg:text-3xl font-semibold text-center"
          style={{ color: headingColor }}
        >
          The Zuvara Community
        </h2>
        <p
          className="lg:text-lg leading-relaxed max-w-5xl mx-auto text-center"
          style={{ color: subtleText }}
        >
          Real stories from parents like you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
        {(product.reviewsData && product.reviewsData.length > 0
          ? product.reviewsData
          : []
        ).map((review) => (
          <div
            key={review.id}
            className="p-4 lg:p-8 rounded-3xl border flex flex-col h-full transition-all hover:shadow-xl"
            style={{
              backgroundColor: cardBg,
              borderColor: cardBorder,
            }}
          >
            <div className="flex items-center gap-4 mb-4 lg:mb-8">
              <div
                className="size-12 lg:size-14 rounded-xl shadow-sm flex items-center justify-center font-black lg:text-xl border"
                style={{
                  backgroundColor: "#ffffff",
                  color: pageText,
                  borderColor: cardBorder,
                }}
              >
                {review.userInitial}
              </div>
              <div>
                <h4 className="font-black" style={{ color: pageText }}>
                  {review.userName}
                </h4>
                <div className="flex gap-0.5 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={10}
                      fill={i < review.rating ? starColor : "none"}
                      stroke={starColor}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p
              className="font-medium lg:text-lg leading-relaxed italic"
              style={{ color: subtleText }}
            >
              &apos;{review.comment}&apos;
            </p>
          </div>
        ))}

        {(!product.reviewsData || product.reviewsData.length === 0) && (
          <div
            className="col-span-full py-12 text-center rounded-3xl border border-dashed"
            style={{ backgroundColor: cardBg, borderColor: cardBorder }}
          >
            <p className="font-bold" style={{ color: subtleText }}>
              No reviews yet for this product.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewSection;