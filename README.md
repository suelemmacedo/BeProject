# BeProject — Gestão de Funcionários

Aplicação web desenvolvida com **React e TypeScript** para consulta e pesquisa de funcionários, com interface responsiva e integração com uma API REST simulada.

## Funcionalidades

- Listagem de funcionários com foto, nome, cargo, data de admissão e telefone.
- Pesquisa de funcionários por nome.
- Interface responsiva para computadores e dispositivos móveis.
- Formatação de datas e telefones.
- Tratamento de carregamento e erros na consulta à API.
- Navegação com React Router.

## Tecnologias utilizadas

- **React** — construção da interface.
- **TypeScript** — tipagem estática.
- **Vite** — ambiente de desenvolvimento e build.
- **Styled Components** — estilização.
- **React Router DOM** — gerenciamento da navegação.
- **JSON Server** — simulação de uma API REST.
- **ESLint** — padronização e qualidade do código.

## Como executar o projeto

### Pré-requisitos

- Node.js e npm instalados.
- Git instalado.

### Instalação

Clone o repositório:

```bash
git clone https://github.com/suelemmacedo/BeProject.git
```

Entre na pasta e instale as dependências:

```bash
cd BeProject
npm install
```

### Iniciando a API

Em um terminal:

```bash
npx json-server --watch db.json --port 3001
```

### Iniciando o frontend

Em outro terminal:

```bash
npm run dev
```

Acesse:

http://localhost:5173

## Validação do código

```bash
npm run lint
npm run build
```

## Demonstração

**Link da aplicação:** em breve.

## Sobre o projeto

Este projeto foi desenvolvido a partir de um desafio técnico de frontend e posteriormente aprimorado com foco em organização de código, componentização, boas práticas e experiência do usuário.

As informações dos funcionários são fictícias e utilizadas exclusivamente para demonstração.

## Autora

**Suelem Macedo**

[GitHub](https://github.com/suelemmacedo)