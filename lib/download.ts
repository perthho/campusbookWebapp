export const PRIMARY_APK_URL = "./application-dbfb0c77-d729-40e4-bf07-b3dbd963cc04.apk";
export const FALLBACK_APK_URL = "https://pub-8ac3edb731ba448eb769526003a152d7.r2.dev/campusbook/campusbook.apk";

export async function navigateToApkWithFallback() {
  if (typeof window === "undefined") return;

  try {
    const response = await fetch(PRIMARY_APK_URL, {
      method: "HEAD",
      cache: "no-store",
    });

    window.location.href = response.ok ? PRIMARY_APK_URL : FALLBACK_APK_URL;
  } catch {
    window.location.href = FALLBACK_APK_URL;
  }
}