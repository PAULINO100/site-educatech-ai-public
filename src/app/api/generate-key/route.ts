import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { getStats, incrementStats } from '@/lib/stats-store';

export async function POST() {
  try {
    const stats = await getStats();

    // 1. Verificar limite
    if (stats.count >= stats.limit) {
      return NextResponse.json({ error: 'Limite atingido' }, { status: 403 });
    }

    // 2. Gerar a chave
    const entropy = crypto.randomBytes(32).toString('base64url');
    const newKey = `certus_sk_test_${entropy}`;

    // 3. Incrementar estatística central (Persistência Real)
    await incrementStats();

    return NextResponse.json({ key: newKey });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
