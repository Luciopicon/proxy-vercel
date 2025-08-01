// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: "/:path*", // Captura todas as rotas
        destination: "https://185.194.204.52/:path*", // Seu servidor real
      },
    ];
  },
};
