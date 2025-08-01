# Proxy Reverso via Vercel

Este projeto usa funções Serverless da Vercel para criar um proxy HTTP simples para o IP:
## Como usar

1. Faça um fork ou clone deste repositório.
2. Suba para o GitHub.
3. Vá até [https://vercel.com](https://vercel.com), conecte sua conta GitHub e importe o projeto.
4. Aponte seu domínio para a Vercel.
5. Agora, todas as requisições serão redirecionadas para `http://185.194.204.52`.

## Limitações

- Apenas HTTP (sem HTTPS na origem).
- Sem WebSocket, payload VPN, ou conexões persistentes.
- Máximo de ~10s por requisição.
