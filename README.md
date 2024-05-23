# React Native User Management App

Este projeto é uma aplicação móvel desenvolvida com React Native e TypeScript, que implementa funcionalidades de gerenciamento de usuários. A aplicação utiliza várias tecnologias e bibliotecas para proporcionar uma experiência completa, incluindo gerenciamento de estado com ContextAPI, armazenamento local, cookies, integração com uma API REST usando Axios, e armazenamento de dados localmente com RealmDB.

## Tecnologias Usadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **React Native**: Framework para desenvolvimento de aplicações móveis nativas utilizando React.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código.
- **Axios**: Biblioteca para realizar chamadas HTTP para APIs REST.
- **ContextAPI**: Ferramenta para gerenciamento de estado global no React.
- **React Hooks**: Hooks como `useState`, `useEffect`, `useCallback`, `useMemo` para gerenciar o ciclo de vida e estado dos componentes.
- **AsyncStorage**: Armazenamento persistente assíncrono para React Native.
- **RealmDB**: Banco de dados móvel para armazenamento local.
- **Cookies**: Gerenciamento de cookies no React Native.
- **Local Storage e IndexDB**: Nota: IndexDB não é suportado nativamente no React Native.

## Funcionalidades

- **Gerenciamento de Usuários**: Visualização e armazenamento de informações de usuários.
- **Integração com API REST**: Recuperação de dados de usuários a partir de uma API externa.
- **Armazenamento Local**: Uso do AsyncStorage para armazenamento persistente.
- **Gerenciamento de Cookies**: Armazenamento e recuperação de cookies.
- **Banco de Dados Local**: Uso do RealmDB para armazenamento local de dados.

## Instalação e Configuração

### Pré-requisitos

- Node.js
- Yarn ou npm
- Ambiente de desenvolvimento React Native configurado (Xcode para iOS, Android Studio para Android)

### Passos para Instalação

1. Clone o repositório:

```sh
git clone https://github.com/seu-usuario/react-native-user-management-app.git
cd react-native-user-management-app
```

2. Instale as dependências:

```sh
yarn install
# ou
npm install
```

3. Instale as dependências nativas:

```sh
cd ios
pod install
cd ..
```

### Passos para Instalação

Android

```sh
npx react-native run-android
```

IOS

```sh
npx react-native run-ios
```

### Uso

A aplicação permite visualizar uma lista de usuários obtida de uma API externa, armazenar essas informações localmente e gerenciar o estado dos dados utilizando ContextAPI e hooks do React.

### Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests.

### Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.




