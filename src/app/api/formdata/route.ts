// import { NextResponse } from 'next/server';

// export async function POST(req: Request) {
//   const body = await req.json();
//   return new NextResponse(JSON.stringify(body), {
//     status: 200,
//   });
// }
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  console.log('🚀 ~ file: route.ts:4 ~ GET ~ request:', request.body);
  const greeting = 'Hello World!!';
  const json = {
    greeting,
  };

  return NextResponse.json(json);
}
