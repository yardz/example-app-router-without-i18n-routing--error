export type Locale = (typeof locales)[number];

export const locales = ['en_US', 'de_DE'] as const;
export const defaultLocale: Locale = 'en_US';
