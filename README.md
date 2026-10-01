# Educação para Todos

Site institucional da ONG fictícia Educação para Todos, desenvolvido como uma aplicação front-end responsiva e acessível. O projeto tem como objetivo apresentar os serviços e projetos da organização e disponibilizar um formulário de cadastro para pessoas interessadas em contribuir.

## Tecnologias utilizadas

- HTML5 para estruturação semântica do conteúdo.
- CSS3 para estilização, responsividade, estados de interação e modo escuro.
- JavaScript para navegação da SPA, manipulação do DOM, formulário e interatividade.
- localStorage para persistência local dos dados.
- Vite para desenvolvimento e geração da build otimizada de produção.
- Git e GitHub para versionamento, gestão de branches, Issues, Pull Requests e releases.

## Funcionalidades

- Navegação em formato SPA.
- Apresentação dos projetos da ONG.
- Formulário de cadastro com validação.
- Persistência de dados com localStorage.
- Layout responsivo.
- Modo escuro.
- Navegação por teclado e foco visível.
- Imagem otimizada no formato WebP.

## Acessibilidade

O projeto adota práticas baseadas nas diretrizes WCAG 2.1, incluindo HTML semântico, landmarks, atributos WAI-ARIA quando necessários, navegação por teclado, estados de foco visíveis e contraste adequado entre texto e fundo.

O modo escuro também foi validado quanto à legibilidade e ao contraste dos principais elementos da interface.

## Pré-requisitos

Para executar o projeto localmente, é necessário possuir:

- Node.js
- npm
- Git

## Instalação local

Clone o repositório:

```bash
git clone https://github.com/luisgustavocdlima/educacao-para-todos.git
```

Entre na pasta:

```bash
cd educacao-para-todos
```

Instale as dependências:

```bash
npm install
```

## Execução em desenvolvimento

Para iniciar o servidor de desenvolvimento do Vite:

```bash
npm run dev
```

O endereço local será informado pelo Vite no terminal.

## Build de produção

Para gerar os arquivos otimizados para produção:

```bash
npm run build
```

Os arquivos resultantes serão gerados no diretório `dist`.

Para testar localmente a versão de produção:

```bash
npm run preview
```

## Testes e validação

A aplicação foi validada manualmente durante o desenvolvimento. Foram verificados:

- navegação entre as seções;
- funcionamento e validação do formulário;
- persistência de dados;
- navegação por teclado;
- estados de foco;
- modo claro e modo escuro;
- contraste dos principais elementos;
- responsividade;
- carregamento da imagem WebP;
- console do navegador;
- funcionamento da build de produção com Vite.

O projeto não possui, nesta versão, uma suíte automatizada de testes.

## Versionamento

O projeto utiliza uma estratégia baseada em GitFlow:

- `master`: versões estáveis destinadas à produção;
- `develop`: integração das alterações em desenvolvimento;
- `feature/`: desenvolvimento isolado de funcionalidades ou melhorias.

As mensagens de commit seguem o padrão Conventional Commits, utilizando identificadores como `docs:` e `perf:`.

As versões estáveis seguem o Versionamento Semântico (SemVer), no formato `MAJOR.MINOR.PATCH`.

## Release

A primeira versão estável foi publicada como:

`v1.0.0`

## Deploy

A aplicação será publicada em ambiente de produção após a conclusão da configuração de deploy.