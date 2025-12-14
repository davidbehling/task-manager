# ✅ Task Manager

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![License](https://img.shields.io/badge/license-MIT-green)

Aplicação de **gerenciamento de tarefas** desenvolvida para **organizar atividades**, acompanhar status e prazos, e demonstrar boas práticas de desenvolvimento em projetos web.

O projeto tem foco **educacional e de portfólio**, evidenciando organização de código, separação de responsabilidades e escalabilidade.


# 📌 Visão Geral

Funcionalidades principais:

- 📝 Criar, editar e remover tarefas
- ✅ Marcar tarefas como concluídas
- ⏰ Definir prazos (deadlines)
- 🏷️ Categorizar tarefas
- 🔍 Filtros por status
- 📊 Visualização clara das atividades


# 🏗️ Arquitetura da Aplicação

Fluxo geral da aplicação:

```

UI (Interface)
↓
Controllers / Handlers
↓
Services (Regras de Negócio)
↓
Repositories / Storage

```

A arquitetura foi pensada para **facilidade de manutenção** e **evolução futura**.


# 📂 Estrutura de Diretórios

```

task-manager/
├── src/
│   ├── components/              # Componentes da interface
│   │   ├── TaskForm.js          # Formulário de tarefas
│   │   ├── TaskList.js          # Lista de tarefas
│   │   └── TaskItem.js          # Item individual
│   │
│   ├── services/                # Regras de negócio
│   │   └── taskService.js       # Lógica de tarefas
│   │
│   ├── repository/              # Persistência de dados
│   │   └── taskRepository.js
│   │
│   ├── styles/                  # Estilos da aplicação
│   │   └── main.css
│   │
│   ├── App.js                   # Componente raiz
│   └── index.js                 # Entry point
│
├── public/                      # Arquivos públicos
│
├── package.json                 # Dependências e scripts
└── README.md                    # Documentação

````

> Estrutura simples e clara, ideal para projetos de pequeno e médio porte.


# ⚙️ Tecnologias Utilizadas

- **JavaScript (ES6+)**
- **HTML5 / CSS3**
- **Node.js / npm**
- (Opcional) **React** ou outro framework frontend


# 🚀 Como Executar o Projeto

# Pré-requisitos
- Node.js **16+**
- npm ou yarn

# Instalação
```bash
npm install
# ou
yarn install
````

# Executar em desenvolvimento

```bash
npm start
# ou
yarn start
```

A aplicação estará disponível em:

```
http://localhost:3000
```


Integrating Firebase with your React project.

1. Go to Firebase at https://firebase.google.com/

2. Click 'Go to Console'

3. Create a new project by accessing an existing project.

4. On the left side of the screen, click 'Project Overview' settings.

5. Select 'Project Settings'

6. In the 'General' tab, below you will find the Firebase integration keys for the project.


# Tela de Login.

![Tela de login](https://github.com/davidbehling/task-manager/blob/main/public/images/01_Tela_Login.png)

# Tela de Cadastro de usuário.

![Tela de login](https://github.com/davidbehling/task-manager/blob/main/public/images/02_Tela_Cadastro.png)

# Tela de lista de tasks após o login.

![Tela de login](https://github.com/davidbehling/task-manager/blob/main/public/images/03_Tela_Apos_o_Login.png)

# Tela de edição de task.

![Tela de login](https://github.com/davidbehling/task-manager/blob/main/public/images/04_Tela_Edit.png)


