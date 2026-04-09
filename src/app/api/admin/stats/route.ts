import { NextResponse } from 'next/server';
import { getStats } from '@/lib/stats-store';

const ADMIN_PIN = '1618';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const pin = searchParams.get('pin');

  if (pin !== ADMIN_PIN) {
    return NextResponse.json({ error: 'Acesso negado' }, { status: 401 });
  }

  const stats = await getStats();
  return NextResponse.json({
    ...stats,
    status: 'Soberano',
    version: '1.6.1'
  });
}
