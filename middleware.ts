import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { get } from '@vercel/edge-config';

const MAINTENANCE_MODE_KEY = 'maintenance';
export async function middleware(request: NextRequest) {
  try {
    const isInMaintenanceMode: boolean | null | undefined =
      await get(MAINTENANCE_MODE_KEY);
    if (isInMaintenanceMode === true) {
      request.nextUrl.pathname = `/maintenance`;
      return NextResponse.rewrite(request.nextUrl);
    }
  } catch (error) {
    console.error('Error checking maintenance mode:', error);
    return NextResponse.next();
  }
}
