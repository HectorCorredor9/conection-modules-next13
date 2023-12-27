import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const json = await request.json();
    return Response.json(json);
  } catch (e) {
    console.log(e, 'no leyo nada del body');
    return new Response('ok', { status: 200 });
  }
}
