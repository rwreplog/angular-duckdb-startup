# AngularDuckdbStartup

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Ensure Node is installed 
`nvm install --lts` 

## Create new Angular application with specific version (v16)
`npx -p @angular/cli@16 ng new [YourAppName]`

## Install DuckDB-WASM and DuckDB-WASM-Shell
`npm install @duckdb/duckdb-wasm`

`npm install @duckdb/duckdb-wasm-shell`

## Install Emscripten Types
`npm install @types/emscripten`

## Create a DuckDB Service
`ng g s services/duck-db`


## Add XTerm CSS to your styles.scss file
```@import '~xterm/css/xterm.css';

html,
body {
  height: 100%;
}

body {
  margin: 0;
}
