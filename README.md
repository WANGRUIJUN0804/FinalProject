
# Vue Test Project

## Project Description

This project is a Vue.js-based web application that utilizes several popular libraries and frameworks, including Vue Router for routing, Vuex for state management, and Element UI for the user interface components. The project also integrates external libraries like Axios for HTTP requests and ECharts for data visualization.

## Table of Contents

- [Project Description](#project-description)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)
- [Project Structure](#project-structure)
- [Development](#development)
- [Build](#build)
- [Linting](#linting)
- [License](#license)

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd vue_test
   ```

2. **Install the required dependencies**:
   ```bash
   npm install
   ```

## Usage

After the dependencies are installed, you can start the development server with:

```bash
npm run serve
```

This command will start the Vue.js development server and you can view the application by navigating to `http://localhost:8080` in your web browser.

## Dependencies

The following dependencies are required for this project:

- `axios`: ^1.7.2 - For making HTTP requests.
- `core-js`: ^3.8.3 - Standard library polyfill.
- `echarts`: ^5.5.1 - For charting and data visualization.
- `element-ui`: ^2.15.14 - UI component library for Vue.js.
- `jquery`: ^3.7.1 - JavaScript library for DOM manipulation.
- `paper`: ^0.12.18 - Vector graphics scripting framework.
- `vue`: ^2.6.14 - The core framework for building the user interface.
- `vue-router`: ^3.6.5 - The official router for Vue.js.
- `vuex`: ^4.1.0 - State management pattern + library for Vue.js.

## Dev Dependencies

The following development dependencies are used in this project:

- `@babel/core`: ^7.12.16 - Babel compiler core.
- `@babel/eslint-parser`: ^7.12.16 - ESLint parser for modern JavaScript features.
- `@vue/cli-plugin-babel`: ~5.0.0 - Vue CLI Babel plugin.
- `@vue/cli-plugin-eslint`: ~5.0.0 - Vue CLI ESLint plugin.
- `@vue/cli-service`: ~5.0.0 - CLI service for Vue.js projects.
- `babel-plugin-component`: ^1.1.1 - Babel plugin to import components on demand.
- `eslint`: ^7.32.0 - Linting utility for JavaScript and Vue.js.
- `eslint-plugin-vue`: ^8.0.3 - Official ESLint plugin for Vue.js.
- `less`: ^4.2.0 - CSS pre-processor.
- `less-loader`: ^12.2.0 - Loader for Less files in webpack.
- `vue-template-compiler`: ^2.6.14 - Vue.js compiler for templates.

## Project Structure

A brief overview of the project's structure:

```
vue_test/
│
├── public/              # Public assets
├── src/                 # Source code
│   ├── assets/          # Static assets (images, fonts, etc.)
│   ├── components/      # Vue.js components
│   ├── views/           # Vue.js views
│   ├── router/          # Vue Router configuration
│   ├── store/           # Vuex store configuration
│   ├── App.vue          # Main Vue component
│   └── main.js          # Application entry point
│
├── .eslintignore        # Files and directories ignored by ESLint
├── .eslintrc.js         # ESLint configuration
├── babel.config.js      # Babel configuration
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation
```

## Development

To start development, use the following command to run the development server:

```bash
npm run serve
```

This will start the server, and any changes you make in the source files will be automatically reloaded.

## Build

To build the project for production, use the following command:

```bash
npm run build
```

This will create an optimized, production-ready build of the project in the `dist/` directory.

## Linting

To lint the project's JavaScript and Vue.js files, use the following command:

```bash
npm run lint
```

This will check the code for any stylistic or potential errors based on the ESLint configuration.

## License

This project is licensed under the [MIT License](LICENSE).
