import { sql } from '@/lib/server/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'No id provided' }, { status: 400 });
  }

  const result = (
    await sql`
    INSERT INTO views (id, views) 
    VALUES (${id}, 1)
    ON CONFLICT (id) 
    DO UPDATE SET views = views.views + 1
    RETURNING *;`
  )?.at(0);

  if (!result) {
    return NextResponse.json(
      { error: 'View record not found.' },
      { status: 404 }
    );
  }

  return NextResponse.json(result);
}
