// import { NextResponse } from 'next/server';

// export async function POST(req: Request) {
//   const body = await req.json();
//   return new NextResponse(JSON.stringify(body), {
//     status: 200,
//   });
// }
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  if (request.method === 'POST') {
    try {
      const datosDelCuerpo = request.body;

      console.log('Datos del cuerpo de la solicitud:', datosDelCuerpo);

      return NextResponse.json(datosDelCuerpo);
    } catch (error) {
      console.error('Error al procesar la solicitud POST:', error);
    }
  }
}
