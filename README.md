# ✅ Task Manager

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-enabled-blue?logo=docker&logoColor=white)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![License](https://img.shields.io/badge/license-MIT-green)

Aplicação de gerenciamento de tarefas desenvolvida com React e Firebase para organizar atividades pessoais. Permite criar, editar e excluir tarefas com autenticação de usuários.

O projeto tem foco educacional e de portfólio, demonstrando integração com Firebase (Firestore e Authentication), roteamento protegido com React Router e containerização com Docker.


## 📌 Visão Geral

Funcionalidades principais:

📝 CRUD básico de tarefas (adicionar e remover)
🔐 Sistema de autenticação com Firebase
👤 Registro de novos usuários
🔒 Proteção de rotas privadas
🔥 Persistência de dados no Firestore


## 🏗️ Arquitetura da Aplicação

Fluxo simplificado da aplicação:

```
UI (Componentes React: Home, Register, Admin)
↓
Chamadas diretas ao Firebase (dentro dos componentes)
↓
Firebase (Firestore + Auth)

```

## 📂 Estrutura de Diretórios

```
task-manager/
├── public/
│   ├── favicon.ico                    Ícone da aplicação exibido na aba do navegador
│   ├── index.html                     Template HTML principal da aplicação React
│   ├── manifest.json                  Configurações PWA com metadados do app (ícones, tema, display)
│   └── robots.txt                     Arquivo de configuração para web crawlers/bots de busca
├── src/
│   ├── App.js                         Componente raiz que configura o BrowserRouter e renderiza as rotas
│   ├── firebaseConnection.js          Configuração e inicialização do Firebase (Firestore e Auth) usando variáveis de ambiente
│   ├── index.css                      Estilos globais da aplicação (reset CSS, background escuro, font-family)
│   ├── index.js                       Entry point da aplicação React que renderiza o App no DOM
│   ├── pages/
│   │   ├── Admin/
│   │   │   ├── index.css              Estilos da página de administração de tarefas
│   │   │   └── index.js               Componente da página Admin com CRUD de tarefas (criar, editar, deletar) e logout
│   │   ├── Home/
│   │   │   ├── index.css              Estilos da página de login
│   │   │   └── index.js               Componente da página de login com autenticação Firebase e navegação para registro
│   │   └── Register/
│   │       ├── index.css              Estilos da página de cadastro
│   │       └── index.js               Componente de registro de novos usuários com Firebase Auth
│   └── routes/
│       ├── index.js                   Configuração das rotas da aplicação (Home, Register, Admin com proteção)
│       └── Private.js                 Componente HOC que protege rotas privadas verificando autenticação do usuário
├── .dockerignore                      Arquivos/pastas ignorados pelo Docker (node_modules, build, logs)
├── .env                               Variáveis de ambiente com credenciais do Firebase (NÃO DEVE ESTAR NO GIT)
├── .env.example                       Template de exemplo das variáveis de ambiente necessárias
├── .gitignore                         Arquivos/pastas ignorados pelo Git (node_modules, build, .env, logs)
├── docker-compose.dev.yml             Configuração Docker Compose para ambiente de desenvolvimento
├── Dockerfile                         Instruções para criar imagem Docker da aplicação React
├── Makefile                           Comandos facilitadores para Docker (build, run, bash, stop)
├── package.json                       Dependências e scripts do projeto (React, Firebase, React Router)
├── README.md                          Documentação do projeto com instruções de integração Firebase
└── readme.txt                         Informações básicas sobre o projeto e comandos de instalação de pacotes

````

## ⚙️ Tecnologias Utilizadas

**Frontend:**
```
⚛️ React 18.2.0 - Framework principal
🛣️ React Router DOM 6.8.1 - Gerenciamento de rotas
🎨 CSS3 - Estilização
📄 HTML5 - Estrutura
```
**Backend/Infraestrutura:**
```
🔥 Firebase - Backend as a Service
Firestore - Banco de dados NoSQL
Firebase Auth - Autenticação de usuários
🐳 Docker - Containerização
📦 npm - Gerenciador de pacotes
```
## 🚀 Como Executar o Projeto

### Pré-requisitos:

- Node.js v14+ e npm ou yarn
- Docker e Docker Compose (opcional, para container)
- Conta Firebase com projeto configurado

### Configure as variáveis de ambiente:

Copie .env.example para .env.local e adicione suas credenciais Firebase:

```
REACT_APP_FIREBASE_API_KEY=sua_chave_aqui
REACT_APP_FIREBASE_AUTH_DOMAIN=seu_dominio.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=seu_projeto
REACT_APP_FIREBASE_STORAGE_BUCKET=seu_bucket.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=seu_sender_id
REACT_APP_FIREBASE_APP_ID=seu_app_id

```
### Build e execute com Docker Compose:
```bash
make docker
```

### A aplicação estará disponível em:
```
http://localhost:3000
```

### Integrating Firebase with your React project.

1. Go to Firebase at https://firebase.google.com/

2. Click 'Go to Console'

3. Create a new project by accessing an existing project.

4. On the left side of the screen, click 'Project Overview' settings.

5. Select 'Project Settings'

6. In the 'General' tab, below you will find the Firebase integration keys for the project.


### 🖥️ Tela de Login.

![Tela de login](https://github.com/davidbehling/task-manager/blob/main/public/images/01_Tela_Login.png)

### 🖥️ Tela de Cadastro de usuário.

![Tela de login](https://github.com/davidbehling/task-manager/blob/main/public/images/02_Tela_Cadastro.png)

### 🖥️ Tela de lista de tasks após o login.

![Tela de login](https://github.com/davidbehling/task-manager/blob/main/public/images/03_Tela_Apos_o_Login.png)

### 🖥️ Tela de edição de task.

![Tela de login](https://github.com/davidbehling/task-manager/blob/main/public/images/04_Tela_Edit.png)


