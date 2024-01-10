import { NextResponse } from 'next/server';

export async function POST(req: Request, res: any) {
  console.log('🚀 ~ file: route.ts:4 ~ POST ~ res:', res);
  console.log('🚀 ~ file: route.ts:4 ~ POST ~ req:', req.headers);
  console.log('🚀 ~ file: route.ts:4 ~ POST ~ req:', req.formData);
  console.log('🚀 ~ file: route.ts:4 ~ POST ~ req:', req.body);
  console.log('🚀 ~ file: route.ts:4 ~ POST ~ req:', req.method);
  console.log('🚀 ~ file: route.ts:4 ~ POST ~ req:', req.referrer);
  console.log('🚀 ~ file: route.ts:4 ~ POST ~ req:', req.destination);
  const body = await req.json();
  return new NextResponse(JSON.stringify(body), {
    status: 200,
  });
}
