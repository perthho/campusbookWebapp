import { NextResponse } from 'next/server';

export async function GET() {
  const GITHUB_APK_URL = 'https://github.com/perthho/campusboo/releases/download/v1.0.0/campusbook.apk';

  try {
    const response = await fetch(GITHUB_APK_URL);

    if (!response.ok) {
      throw new Error(`GitHub returned status: ${response.status}`);
    }

    // Pass the exact headers needed to force a clean mobile download
    const headers = new Headers();
    headers.set('Content-Type', 'application/vnd.android.package-archive');
    headers.set('Content-Disposition', 'attachment; filename="CampusBook-v1.0.0.apk"');
    
    // Copy the content length from GitHub so the browser can show an accurate progress bar
    const contentLength = response.headers.get('content-length');
    if (contentLength) {
      headers.set('Content-Length', contentLength);
    }

    return new NextResponse(response.body, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error('Error downloading APK:', error);
    return new NextResponse('Failed to download APK file.', { status: 500 });
  }
}
