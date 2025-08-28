export async function post({ request }) {
  const data = await request.formData();
  console.log('contact', Object.fromEntries(data));
  return new Response(null, { status: 204 });
}
