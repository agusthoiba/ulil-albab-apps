// Centralised env access — avoids direct process.env usage in .tsx files
// where NodeJS namespace augmentation is not always resolved.
export const API_URL: string = process.env.EXPO_PUBLIC_API_URL ?? '';
export const API_KEY: string = process.env.EXPO_PUBLIC_API_KEY ?? '';

export const AGREED_TERMS_KEY = '@ulil_albab:agreed_terms';
export const FIREBASE_UID_KEY = '@ulil_albab:firebase_uid';

export const LAST_READ_KEYS = '@ulil_albab:last_read';
