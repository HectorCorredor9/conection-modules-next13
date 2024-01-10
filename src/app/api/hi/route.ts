import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  console.log('🚀 ~ file: route.ts:4 ~ GET ~ request:', request.body);
  console.log('🚀 ~ file: route.ts:4 ~ GET ~ request:', request);
  const greeting = 'Hello World!!';
  const json = {
    greeting,
  };

  return NextResponse.json(json);
}
