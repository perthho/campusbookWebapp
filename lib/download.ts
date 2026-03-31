export const PRIMARY_APK_URL = "https://expo.dev/artifacts/eas/9rq92B7PbzWz6ewXZj4Rid.apk";
export const FALLBACK_APK_URL = "https://pub-8ac3edb731ba448eb769526003a152d7.r2.dev/campusbook/campusbook.apk";

export async function navigateToApkWithFallback() {
  if (typeof window === "undefined") return;

  // Use PRIMARY_APK_URL directly - Expo URLs are reliable
  // FALLBACK_APK_URL is available as backup if needed
  window.location.href = PRIMARY_APK_URL;
}