/**
 * i18n Utilities for Scholar Nepal
 * Provides translation functions and locale management
 */

// Import translation files
import enTranslations from './locales/en.json';
import neTranslations from './locales/ne.json';

// Supported locales
export const locales = ['en', 'ne'] as const;
export type Locale = typeof locales[number];

// Default locale
export const defaultLocale: Locale = 'en';

// Translation type
type Translations = typeof enTranslations;

// Translation map
const translations: Record<Locale, Translations> = {
    en: enTranslations,
    ne: neTranslations,
};

/**
 * Get all translations for a specific locale
 * @param locale - The locale to get translations for
 * @returns The translation object for the locale
 */
export function getTranslations(locale: Locale = defaultLocale): Translations {
    return translations[locale] || translations[defaultLocale];
}

/**
 * Get a translated string by key path
 * @param key - Dot-notation path to the translation (e.g., 'header.nav.home')
 * @param locale - The locale to get the translation for
 * @returns The translated string
 */
export function t(key: string, locale: Locale = defaultLocale): string {
    const trans = getTranslations(locale);
    const keys = key.split('.');

    let result: any = trans;
    for (const k of keys) {
        result = result?.[k];
    }

    return typeof result === 'string' ? result : key;
}

/**
 * Check if a locale is valid
 * @param locale - The locale to validate
 * @returns True if valid, false otherwise
 */
export function isValidLocale(locale: string): locale is Locale {
    return locales.includes(locale as Locale);
}

/**
 * Get the alternate locale
 * @param currentLocale - The current locale
 * @returns The alternate locale
 */
export function getAlternateLocale(currentLocale: Locale): Locale {
    return currentLocale === 'en' ? 'ne' : 'en';
}

/**
 * Get the locale from the URL path
 * @param pathname - The URL pathname
 * @returns The detected locale or default locale
 */
export function getLocaleFromPath(pathname: string): Locale {
    const segments = pathname.split('/').filter(Boolean);
    const firstSegment = segments[0];

    if (firstSegment && isValidLocale(firstSegment)) {
        return firstSegment;
    }

    return defaultLocale;
}

/**
 * Get the path for a locale
 * @param locale - The locale
 * @param path - Optional path to append
 * @returns The full path with locale prefix if needed
 */
export function getLocalePath(locale: Locale, path: string = '/'): string {
    // Don't prefix default locale
    if (locale === defaultLocale) {
        return path;
    }

    // Ensure path starts with /
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;

    return `/${locale}${normalizedPath}`;
}
