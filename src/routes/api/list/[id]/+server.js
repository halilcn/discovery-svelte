export async function DELETE({ params }) {
  return new Response(JSON.stringify({ message: `Deleted ${params.id}` }));
}
