# This project use to learn how to work with AI.

## Copilot

- Create project:

```Batch
# Step 1: Create a new project directory and initialize it with npm or yarn
mkdir react-ts-babel && cd react-ts-babel
npm init -y

# Step 2: Install React, ReactDOM, TypeScript, Babel, and the necessary loaders and plugins
npm install --save react react-dom
npm install --save-dev typescript @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript babel-loader webpack webpack-cli webpack-dev-server html-webpack-plugin

# Step 3: Create a `tsconfig.json` file for TypeScript configuration
echo '{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "commonjs",
    "target": "es6",
    "jsx": "react"
  }
}' > tsconfig.json

# Step 4: Create a `.babelrc` file for Babel configuration
echo '{
  "presets": ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"]
}' > .babelrc

# Step 5: Create a `webpack.config.js` file for Webpack configuration
echo 'const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};' > webpack.config.js

# Step 6: Install and configure Webpack and Webpack Dev Server
npm install --save-dev webpack webpack-dev-server

# Step 7: Create a basic React component to test the setup
mkdir src
echo 'import * as React from "react";
import * as ReactDOM from "react-dom";

const App = () => {
  return <div>Hello React, TypeScript, and Babel!</div>;
};

ReactDOM.render(<App />, document.getElementById("root"));' > src/index.tsx

echo '<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React TypeScript Babel</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>' > src/index.html

```

- Install more packages (react-dom) & @types/