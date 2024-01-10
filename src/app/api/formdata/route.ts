import { NextResponse } from 'next/server';

// export async function POST(req: Request) {
//   const body = await req.json();
//   return new NextResponse(JSON.stringify(body), {
//     status: 200,
//   });
// }

export async function GET(res: any) {
  console.log('🚀 ~ file: route.ts:11 ~ GET ~ res:', res);
  const data = {
    consultantId: 'Bishal Shrestha',
    country: '27',
  };

  return NextResponse.json({ data });
}

export async function POST(req: any) {
  const data = await req.json();
  console.log(data);

  return NextResponse.json(data);
}

// export async function POST(request: NextRequest) {
//   if (request.method === 'POST') {
//     try {
//       const datosDelCuerpo = request.body;

//       console.log('Datos del cuerpo de la solicitud:', datosDelCuerpo);

//       return NextResponse.json(datosDelCuerpo);
//     } catch (error) {
//       console.error('Error al procesar la solicitud POST:', error);
//     }
//   }
// }
