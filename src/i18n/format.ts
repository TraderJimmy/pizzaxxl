import { t, type Lang } from './ui';

interface PricedItem {
  price?: string;
  priceNormal?: string;
  priceXXL?: string;
  priceGlass?: string;
  priceBottle?: string;
}

export function formatPrice(item: PricedItem, lang: Lang): string {
  if (item.priceNormal && item.priceXXL) {
    return `${t(lang, 'price.normal')} ${item.priceNormal} | XXL ${item.priceXXL}`;
  }
  if (item.priceGlass && item.priceBottle) {
    return `${t(lang, 'price.glass')} ${item.priceGlass} | ${t(lang, 'price.bottle')} ${item.priceBottle}`;
  }
  return item.price ?? '';
}
