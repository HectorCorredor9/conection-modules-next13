import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  console.log('🚀 ~ file: route.ts:4 ~ POST ~ req:', req.body);
  console.log('🚀 ~ file: route.ts:4 ~ POST ~ req:', req.method);
  const body = await req.json();
  return new NextResponse(JSON.stringify(body), {
    status: 200,
  });
}
