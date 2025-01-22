# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```




# UNIVERSIDADE FEDERAL DO PIAUÍ – UFPI  
## CENTRO DE CIÊNCIAS DA NATUREZA - CCN  
## DEPARTAMENTO DE COMPUTAÇÃO – DC  
## DISCIPLINA: TÓPICOS EM ENGENHARIA DE SOFTWARE

---

# Sistema de Gerenciamento de Multimídia – Contentify

**Alunos:**
- Bruno Estrella Soares
- Carlos Eduardo Oliveira
- Fernando Augusto Martins
- José Pires Gayoso
- Markesley Ramos do Nascimento

**Teresina, 2025**

---

## INTRODUÇÃO

O sistema tem como objetivo desenvolver uma aplicação web multimídia capaz de armazenar, gerenciar e acessar arquivos de imagens, áudios e vídeos utilizando os serviços da AWS. A solução é projetada para ser escalável, segura e eficiente, atendendo a requisitos modernos de desempenho e acessibilidade.

Durante o desenvolvimento do sistema, para a primeira entrega, foi trabalhado de forma colaborativa, adotando metodologias ágeis e utilizando ferramentas e tecnologias que são mais familiares para os integrantes, para garantir a qualidade e funcionalidade do sistema. Esta documentação apresenta o processo de desenvolvimento, as escolhas técnicas e os resultados alcançados ao longo do projeto.

---

## REQUISITOS DA APLICAÇÃO

Os requisitos do **Sistema de Gerenciamento Multimídia (SGM)** foram definidos com base no objetivo de criar uma aplicação web capaz de gerenciar objetos multimídia, incluindo imagens, áudios e vídeos, de forma segura, escalável e eficiente. O sistema foi projetado para oferecer funcionalidades robustas alinhadas às melhores práticas de usabilidade e desempenho.

### REQUISITOS FUNCIONAIS

Os principais requisitos da aplicação incluem:

1. **Gerenciamento de Usuário**  
   - Registro, autenticação e autorização de usuários.  
   - Edição de perfis, incluindo atualizações, mudança de senha e mudança de foto de perfil.

2. **Gerenciamento de Objetos Multimídia**  
   - Upload de arquivos de mídia, suportando formatos populares.  
   - Operações CRUD em objetos multimídia.  
   - Processamento automático de miniaturas para imagens e vídeos.  
   - Geração de múltiplas resoluções de vídeo.

3. **Pesquisa e Listagem**  
   - Pesquisa de objetos multimídia por nome, descrição ou tags.  
   - Listagem de objetos por tipo ou critérios personalizados.

4. **Visualização de Objetos**  
   - Exibição detalhada de objetos multimídia, incluindo reprodução de vídeos e áudios diretamente na aplicação.

### REQUISITOS NÃO FUNCIONAIS

Os requisitos não funcionais priorizam a experiência do usuário e a robustez do sistema:

1. **Desempenho**  
   - Tempos de respostas aceitáveis para todas as funcionalidades, garantindo fluidez na navegação e manipulação de objetos.

2. **Segurança**  
   - Controle rigoroso de acesso para garantir que cada usuário tenha acesso exclusivo aos seus objetos multimídia.  
   - Implementação de autenticação segura com tokens.

3. **Escalabilidade**  
   - Capacidade de lidar com um número crescente de usuários e objetos sem degradação significativa de desempenho.  
   - Uso de AWS para balanceamento de carga.

4. **Usabilidade**  
   - Possuir uma interface intuitiva e responsiva, garantindo uma boa experiência para o usuário.

---

## TECNOLOGIAS E PRÁTICAS

Para atender aos requisitos citados, foram adotadas algumas práticas:

### Arquitetura Segura

A separação de responsabilidades entre *front-end*, *back-end* e serviços AWS foi essencial para garantir uma arquitetura escalável, segura e de fácil manutenção.

### Front-End

Foi desenvolvido com foco em desempenho e responsividade, utilizando:

- **Linguagem**: TypeScript, garantindo maior segurança no desenvolvimento ao adicionar tipagem estática ao código.  
- **Framework**: React.js, permitindo a criação de uma interface dinâmica e interativa.  
- **Estilização**: Tailwind CSS, proporcionando agilidade no design com classes utilitárias customizáveis.  
- **Build Tool**: Vite, que oferece um ambiente de desenvolvimento eficiente e rápido.  
- **Linting**: ESLint, permitindo padronizar o código.

### Back-End

Foi desenvolvido com foco em desempenho e escalabilidade, utilizando:

- **Linguagem**: Python, por ser de alto nível, fácil implementação e ter diversas bibliotecas disponíveis.  
- **Framework**: Django e Django Rest Framework, por serem escaláveis, fornecerem recursos para criação de APIs REST, garantirem segurança e fácil integração.  
- **Autenticação**: JWT (JSON Web Token), que permite autenticação de usuário através de *tokens*. O Django disponibiliza fácil integração para geração e validação de tokens.

### Serviços AWS

- **EC2**: Servidor de aplicação para hospedar o *back-end* e processar requisições.  
- **VPC**: Nuvem virtual criada, que permite a criação de *subnets*, *gateways* NAT e tabelas de rotas.

### Validação de Dados

Garantia de conformidade e segurança no processamento de entradas do usuário.

---

## LÓGICA DA APLICAÇÃO

### FRONT-END

#### Configurações Gerais

- **Vite-env.d.ts**  
  Arquivo de declaração de tipos para o ambiente do Vite, configurando o suporte ao TypeScript e reconhecendo módulos específicos do Vite.

- **Tailwind.config.js** e **postcss.config.js**  
  Configuram o Tailwind CSS para suportar estilos personalizados (fonte padrão, sombreamento customizado, paleta de cores personalizadas) e o PostCSS para processar estilos CSS com *plugins*, integrando o Tailwind e o Autoprefixer.

- **Eslint.config.js**  
  Configura o ESLint para garantir a consistência do código com suporte a TypeScript e React. Habilita variáveis globais para o ambiente do navegador e garante o uso correto de hooks e exportações seguras com *React Refresh*.

#### Dashboard e Gerenciamento de Arquivo

##### Estrutura do `DashboardPage`

O arquivo `dashboard.tsx` é responsável por apresentar:

- **Cabeçalho da aplicação** (`<Header />`), onde ficam opções de navegação e logout.  
- **Botão de Upload** (`<DialogDemo />`), que abre um modal para envio de arquivos multimídia.  
- **Seletor de Filtro** (`<SelectDemo />`), que filtra os arquivos exibidos por tipo (imagem, vídeo ou áudio).  
- **Grade de Arquivos**: exibida em forma de *grid*, cada elemento mostra o arquivo (imagem, vídeo ou áudio) e informações adicionais, como título, descrição e tags, por meio do componente `<FileInfomations />`.

##### Componentes de Manipulação e Reprodução

###### `FileInfomations`

O componente `FileInfomations` (`file_informations.tsx`) reúne as informações do arquivo, como *nome*, *descrição* e *tags*. Além disso, permite:

- **Edição** (`DialogEditDemo`): ao clicar no botão de edição, um modal é aberto para alterar dados como *nome*, *descrição* e *tags*.  
- **Exclusão** (`AlertDialogDemo`): abre um diálogo de confirmação antes de remover permanentemente o arquivo.

###### Reprodutores de Mídia

- **Vídeo**  
  - Componente `HeroVideoDialogDemoTopInBottomOut`, que utiliza um *dialog* (modal) para exibir o vídeo. Suporta *thumbnail* e animações de abertura e fechamento.  
  - Internamente, utiliza o componente `HeroVideoDialog` com as propriedades `videoSrc` e `thumbnailSrc`.

- **Imagem**  
  - Componente `DialogImageDemo`, que **amplia** a imagem em tela cheia dentro de um modal.  
  - Permite visualização em detalhe sem sair do Dashboard.

- **Áudio**  
  - Componente `AudioPlayerComponent`, baseado na biblioteca [`react-h5-audio-player`](https://www.npmjs.com/package/react-h5-audio-player), que fornece controles de reprodução, volume, pausa, etc.

###### Filtros de Arquivos e Upload

- **`SelectDemo`**: oferece um menu para **filtrar** a exibição de arquivos por tipo (imagem, vídeo, áudio), facilitando a organização e localização de itens.
- **`DialogDemo`**: abre um modal que permite o **upload** de um novo arquivo, garantindo que o usuário só possa selecionar formatos suportados. Também oferece campos adicionais para inserir detalhes como nome e descrição, conforme a API do sistema.

#### Estrutura Principal

- **app.tsx**  
  - Importa o React Router para gerenciar a navegação pela aplicação.  
  - As páginas consideradas críticas são protegidas pelo `protectedRoute`.  
  - Cada página é importada, facilitando a manutenção e escalabilidade.

#### Contexto e Gerenciamento de Estados

- **userContext.tsx**  
  Fornece um **contexto global** para gerenciar os dados do usuário, permitindo fácil acesso e atualização em qualquer parte da aplicação.

#### Estrutura e Modelagem de Dados

- **userData.tsx** e **functionData.tsx**  
  - Define a estrutura de um objeto `UserData`, que armazena informações detalhadas sobre um usuário.  
  - Contém a função `createUser`, responsável por criar um objeto do tipo `UserData` a partir de um conjunto de dados fornecidos.

#### Lógica e Comunicação com a API

- **token.tsx**  
  - Configura o cliente Axios para realizar chamadas à API do *back-end*.  
  - Adiciona automaticamente um token de autenticação nos cabeçalhos das requisições.

#### Componentes de Interface do Usuário

- **header.tsx**  
  - Implementa o cabeçalho principal do aplicativo, fornecendo navegação, busca e a funcionalidade de logout.

- **select.tsx**  
  - Responsável por exibir um menu de opções para gerenciar ações do perfil do usuário, como editar informações, alterar senha e deslogar.

#### Componentes de Perfil

- **perfil_edit.tsx**  
  - Exibe um modal que permite a edição das informações do perfil do usuário.

- **perfil_fotos.tsx, perfil_videos.tsx, perfil_audio.tsx**  
  - Exibe fotos, vídeos e áudios do usuário em um layout responsivo.

- **perfil_galeria.tsx**  
  - Parecido com os últimos três, porém exibe todos de uma vez só.

#### Componentes de Funcionalidades Específicas

- **password_recuperation_card.tsx**  
  - Fornece um modal para que o usuário solicite a recuperação da sua senha.

- **registercard.tsx**  
  - Exibe um formulário de registro e validação dos dados fornecidos pelo usuário.

---

## BACK-END

### 4.2.1 Configurações Gerais

- **settings.py**  
  - Arquivo principal de configuração do Django.  
  - As configurações de banco de dados, tokens de acesso, diretórios de armazenamento etc. estão todas nele.  
  - Define também o uso de uma classe de usuário customizada criada para o projeto.  
  - Todos os *apps* do sistema são registrados neste arquivo.

- **urls.py**  
  - Define todas as *URLs* para as aplicações.  
  - Registra cada conjunto de rotas referente aos *apps* criados.

### 4.2.2 Estrutura Principal

- **authentication**  
  - Diretório onde se encontram as *views* e *serializers* para obtenção dos tokens de acesso.  
  - `serializers.py`: Foi criado um *serializer* que retorna, juntamente com o token de acesso, o *id* do usuário.  
  - `views.py`: Declara a *view* customizada para obtenção de token, que usa nosso serializer.  
  - `urls.py`: Declara as URLs referentes à autenticação.

- **users**  
  - `admin.py`: Define como as configurações de usuário aparecerão no *admin* do Django.  
  - `views.py`: Declara as *views* de usuários.  
    - **UserCRUDView**: realiza o CRUD completo para os usuários.  
    - **ChangeUserPasswordView**: troca a senha do usuário já logado.  
    - **RecoverUserPasswordView**: solicita a troca de senha através de envio de email para o usuário.
  - `permissions.py`: Define as classes de permissão do usuário.  
  - `serializers.py`: Define os *serializers* das *views* de usuários. Cada *serializer* valida um conjunto de atributos a serem usados em cada *view*.  
  - `managers.py`: Sobrescreve as funções de criação de usuário e superusuário.  
  - `models.py`: Define os modelos de usuário.

---

## TESTE E VALIDAÇÃO

### FRONT-END

#### Metodologia de Testes

Os testes foram realizados simulando cenários reais de uso da aplicação. Para isso, as funcionalidades desenvolvidas foram testadas manualmente, interagindo diretamente com a interface do usuário.

#### Cadastro e Autenticação de Usuário

- Teste do formulário de registro, validando entradas válidas e inválidas.  
- Verificação do processo de login e logout, garantindo a geração e exclusão correta de tokens de autenticação.

#### Edição de Perfil

- Alteração de dados do usuário, como nome e *bio*.  
- Validação de restrições, como o mínimo de caracteres no nome de usuário e da senha.  
- Sincronização das alterações com o *back-end*, garantindo persistência.

#### Recuperação de Senha

- Teste do fluxo de recuperação de senha, desde a validação do email no formulário até a interação com o *back-end*.
