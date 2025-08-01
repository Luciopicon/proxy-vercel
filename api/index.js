export default async function handler(req, res) {
  const targetUrl = `http://185.194.204.52${req.url}`;

  try {
    const response = await fetch(targetUrl, {
      method: req.method,
      headers: req.headers,
      body: req.method === "GET" || req.method === "HEAD" ? null : req,
    });

    const contentType = response.headers.get("content-type");
    res.setHeader("content-type", contentType || "text/plain");
    res.status(response.status).send(await response.text());
  } catch (error) {
    res.status(502).send("Erro ao conectar ao IP de origem.");
  }
}
