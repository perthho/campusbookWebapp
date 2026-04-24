export const PRIMARY_APK_URL = "https://expo.dev/artifacts/eas/9rq92B7PbzWz6ewXZj4Rid.apk";
export const FALLBACK_APK_URL = "./application-44559450-7317-4d4e-a30b-879efe42f7c2.apk";

export async function navigateToApkWithFallback() {
  if (typeof window === "undefined") return;

  // Use PRIMARY_APK_URL directly - Expo URLs are reliable
  // FALLBACK_APK_URL is available as backup if needed
  window.location.href = PRIMARY_APK_URL;
}