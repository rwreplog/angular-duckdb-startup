# AngularDuckdbStartup

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

This is a simple app to demonstrate initializing a DuckDB worker and loading the Shell.

## How to run

``` 
git clone https://github.com/rwreplog/angular-duckdb-startup.git

cd angular-duckdb-startup

npm i

npm start
```

Navigate to `http://localhost:4200/`


## Steps to re-create

**Ensure Node is installed** 
`nvm install --lts` 

### Create new Angular application with specific version (v16)
`npx -p @angular/cli@16 ng new [YourAppName]`

### Install DuckDB-WASM and DuckDB-WASM-Shell

`npm install @duckdb/duckdb-wasm`

`npm install @duckdb/duckdb-wasm-shell`

### Install Emscripten Types

`npm install @types/emscripten`

### Create a DuckDB Service

`ng g s services/duck-db`

### Add XTerm CSS to your styles.scss file
*This is important otherwise your shell's display will be incorrect*

```
@import '~xterm/css/xterm.css';

html,
body {
  height: 100%;
}

body {
  margin: 0;
}
```