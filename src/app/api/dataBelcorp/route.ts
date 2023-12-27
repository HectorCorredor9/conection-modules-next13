export async function POST(req: Request) {
  console.log('🚀 ~ file: route.ts:4 ~ POST ~ req:', req);

  const datos = req.body;
  console.log('🚀 ~ file: route.ts:7 ~ POST ~ datos:', datos);
  return new Response('ok', {
    status: 200,
  });
  // const headersList = headers();
  // const referer = headersList.get('referer');
  // return new Response('Hello, Next.js!', {
  //   status: 200,
  //   headers: { referer: referer },
  // });
  // const body = await req.json();
  // console.log('🚀 ~ file: router.txs:12 ~ POST ~ body:', body);
  // return new Response(
  //   JSON.stringify({
  //     hello: 'world',
  //   })
  // );
}
