import { NextResponse } from 'next/server';

export async function GET() {
  const GITHUB_APK_URL = 'https://github.com/perthho/campusboo/releases/download/v1.0.0/campusbook.apk';
  
  // Redirect directly to the GitHub release.
  // Next.js serverless functions have a 4.5MB response limit, which is why streaming the 116MB APK failed.
  // A direct redirect lets the mobile browser's native download manager handle the file.
  return NextResponse.redirect(GITHUB_APK_URL);
}
