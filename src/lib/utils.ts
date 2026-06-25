import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { Service, BlogPost, Promotion } from "@/types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getLocalizedService(service: Service, locale: string) {
  const isEn = locale === "en";
  return {
    ...service,
    title: (isEn && service.titleEn) || service.title,
    description: (isEn && service.descriptionEn) || service.description,
    longDescription: (isEn && service.longDescriptionEn) || service.longDescription,
    features: (isEn && service.featuresEn) || service.features,
    keywords: (isEn && service.keywordsEn) || service.keywords,
    faqs: (isEn && service.faqsEn) || service.faqs,
  };
}

export function getLocalizedPromotion(promo: Promotion, locale: string) {
  const isEn = locale === "en";
  return {
    slug: promo.slug,
    price: promo.price,
    image: `/images/promotions/${promo.slug}.webp`,
    title: (isEn && promo.titleEn) || promo.title,
    blurb: (isEn && promo.blurbEn) || promo.blurb,
    includes: (isEn && promo.includesEn) || promo.includes,
    alt: (isEn && promo.altEn) || promo.alt,
  };
}

export type LocalizedPromotion = ReturnType<typeof getLocalizedPromotion>;

export function getLocalizedPost(post: BlogPost, locale: string) {
  const isEn = locale === "en";
  return {
    ...post,
    title: (isEn && post.titleEn) || post.title,
    description: (isEn && post.descriptionEn) || post.description,
    content: (isEn && post.contentEn) || post.content,
    category: (isEn && post.categoryEn) || post.category,
    keywords: (isEn && post.keywordsEn) || post.keywords,
  };
}
