import { NextResponse, NextRequest } from 'next/server';

// export async function POST(req: Request) {
//   const body = await req.json();
//   return new NextResponse(JSON.stringify(body), {
//     status: 200,
//   });
// }

// export async function POST(req: any) {
//   const data = await req.json();
//   console.log(data);

//   return NextResponse.json(data);
// }

export async function POST(request: NextRequest) {
  if (request.method === 'POST') {
    const datosDelCuerpo = request.body;

    console.log('Datos del cuerpo de la solicitud:', datosDelCuerpo);

    return NextResponse.json(datosDelCuerpo);
  }
}
