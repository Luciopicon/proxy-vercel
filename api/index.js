// middleware.js (Vercel Edge Function)
export const config = {
  matcher: "/:path*", // Todas as rotas
};

export default function middleware(request) {
  const url = new URL(request.url);
  const originUrl = new URL("https://185.194.204.52" + url.pathname);

  // Adiciona cabeçalhos de segurança
  const response = NextResponse.rewrite(originUrl.toString(), {
    headers: {
      "X-Forwarded-Host": request.headers.get("host") || "",
      "X-Forwarded-For": request.ip || "",
    },
  });

  // Configura cache (opcional)
  response.headers.set("Cache-Control", "public, max-age=3600"); // Cache de 1h

  return response;
}
