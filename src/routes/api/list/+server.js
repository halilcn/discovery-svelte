export async function POST({ request }) {
  const { title, content } = await request.json();

  return new Response(
    JSON.stringify({ id: new Date().getTime(), title, content })
  );
}