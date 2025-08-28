export const prerender = false;
export async function POST({ request }) {
  const data = await request.formData();
  console.log('contact', Object.fromEntries(data));
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
