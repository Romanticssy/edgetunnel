export async function onRequest(context) {
  const target = "https://ip.8888888888.eu.org/api";

  try {
    const response = await fetch(target, {
      method: context.request.method,
      headers: context.request.headers,
      body: context.request.body,
    });

    // 保持目标 API 的响应
    return new Response(await response.text(), {
      status: response.status,
      headers: response.headers,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
