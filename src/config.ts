// Centralised env access — avoids direct process.env usage in .tsx files
// where NodeJS namespace augmentation is not always resolved.
import Constants from 'expo-constants';

function getApiUrl(): string {
  if (__DEV__) {
    // Derive host from the Expo dev server so physical devices and emulators
    // always reach the local backend without hardcoding IPs or ngrok.
    const hostUri = Constants.expoConfig?.hostUri;
    const host = hostUri?.split(':')[0] ?? '10.0.2.2';
    const port = process.env.EXPO_PUBLIC_API_PORT ?? '3000';
    return `http://${host}:${port}`;
  }
  return process.env.EXPO_PUBLIC_API_URL ?? '';
}

export const API_URL: string = getApiUrl();
export const API_KEY: string = process.env.EXPO_PUBLIC_API_KEY ?? '';

export const AGREED_TERMS_KEY = '@ulil_albab:agreed_terms';
export const FIREBASE_UID_KEY = '@ulil_albab:firebase_uid';

export const LAST_READ_KEYS = '@ulil_albab:last_read';
