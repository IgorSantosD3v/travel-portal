# ViajaJá — Portal de Viagens

Aplicação em Next.js (App Router + TypeScript + CSS Modules) que simula um pequeno portal de viagens, com listagem de destinos turísticos e páginas de detalhes individuais via rotas dinâmicas.

## Funcionalidades

- **Página inicial (`/`)** — apresentação do portal com link para a listagem de destinos.
- **Página `/destinos`** — lista os destinos turísticos (6 no total) usando o componente `CardDestino`.
- **Página `/destinos/[id]`** — rota dinâmica com informações detalhadas de cada destino.
- **Componente `Layout`** — organiza `Header` (menu de navegação) e `Footer` reutilizáveis em todas as páginas.
- **CSS Modules** em todos os componentes e páginas, com paleta de cores harmônica (tons de verde-azulado e laranja).

## Estrutura do projeto

```
travel-portal/
├── app/
│   ├── layout.tsx            # Layout raiz (usa o componente Layout)
│   ├── page.tsx               # Página inicial (/)
│   ├── page.module.css
│   ├── globals.css
│   └── destinos/
│       ├── page.tsx           # Listagem de destinos (/destinos)
│       ├── page.module.css
│       └── [id]/
│           ├── page.tsx       # Detalhes do destino (/destinos/:id)
│           └── page.module.css
├── components/
│   ├── Layout/
│   │   ├── Layout.tsx
│   │   └── Layout.module.css
│   ├── Header/
│   │   ├── Header.tsx
│   │   └── Header.module.css
│   ├── Footer/
│   │   ├── Footer.tsx
│   │   └── Footer.module.css
│   └── CardDestino/
│       ├── CardDestino.tsx
│       └── CardDestino.module.css
├── data/
│   └── destinos.ts            # Array local simulando os dados dos destinos
├── types/
│   └── destino.ts             # Tipagem TypeScript do Destino
├── next.config.mjs
├── tsconfig.json
└── package.json
```

## Como rodar localmente

Pré-requisito: [Node.js](https://nodejs.org/) 18.18 ou superior instalado.

```bash
# 1. Entre na pasta do projeto
cd travel-portal

# 2. Instale as dependências
npm install

# 3. Rode o servidor de desenvolvimento
npm run dev
```

Depois abra [http://localhost:3000](http://localhost:3000) no navegador.

## Como subir para o GitHub

1. Crie um repositório público novo no GitHub (sem README, sem .gitignore — já temos os nossos).
2. Dentro da pasta `travel-portal`, rode:

```bash
git init
git add .
git commit -m "Primeira versão do portal de viagens"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git
git push -u origin main
```

3. Copie o link do repositório e compartilhe conforme pedido na plataforma da tarefa.

## Observações técnicas

- O projeto usa o **App Router** do Next.js (pasta `app/`), que já implementa rotas baseadas em arquivos nativamente. A pasta `destinos/[id]` é a rota dinâmica.
- As imagens dos destinos usam o serviço `picsum.photos` como placeholder (já configurado em `next.config.mjs` via `images.remotePatterns`). Se quiser usar fotos reais, basta trocar as URLs em `data/destinos.ts` por imagens próprias (na pasta `public/`) ou outro serviço de imagens.
- Todo o conteúdo de destinos vem de um array local (`data/destinos.ts`), sem necessidade de banco de dados ou API externa.
