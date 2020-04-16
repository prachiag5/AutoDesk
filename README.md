
Just need to edit some codes in `/src`, then:
```shell
yarn
yarn start
```

Or if you want to build a production build, and then serve it locally:
```shell
yarn run build
yarn run serve
```
---

## Ant Design

[Ant Design](https://ant.design/)

Ant Design UI framework is used to easily provide us with a library of components to use in React.

Take note that we also tweak babel so that it will load only the components we need in Antd instead of bundling the whole library. Read more about how this is configured [here](https://github.com/ant-design/babel-plugin-import#usage).

## Loadable Components

[@loadable/component](https://www.smooth-code.com/open-source/loadable-components/)

Loadable components are used to delay importing the components to only when they are needed. This is being used in `src/Router,js` where the pages are only imported if the route for the required page is active.

```js
const WelcomePage = loadable( () => import( '~/pages/WelcomePage' ) );
const ProjectsPage = loadable( () => import( '~/pages/ProjectsPage' ) );
const LoginPage = loadable( () => import( '~/pages/LoginPage' ) );
const NotFoundPage = loadable( () => import( '~/pages/NotFoundPage' ) );
```

This concept can be used for other components as well, when we know we don't need them loaded immediately, instead of importing them at the top of the file all the time.

## React Router

[React Router](https://github.com/ReactTraining/react-router)


## Babel
[ES6 JavaScript Transpiler](https://babeljs.io/)

In order to use the latest ES6 syntax, we transpile our codes using Babel.

Check the `.babelrc` file for configurations.

Some of the features we use:

* *babel-plugin-root-import*: This allows us to refer files in the root folder during import statements e.g. `import Button from '~/components/Button'` without needing to traverse relative file paths which might be cumbersome and not portable.
* *@babel/plugin-proposal-class-properties*: A lot of React components need you to bind internal functions in the constructor e.g. [Handling Events](https://reactjs.org/docs/handling-events.html). This feature allows you to define annonymous functions as class properties like so: `onClick = ( e ) => { console.log( 'Hello', e }`. Use this syntax instead of binding the functions in constructor.
* *@babel/plugin-proposal-object-rest-spread*: Allows the use of the [spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax).
* *react-hot-loader/babel*: Enables tweaking of React components in real time without needing to reload the browser when code changes. See [react-hot-loader](https://github.com/gaearon/react-hot-loader).

## Flow
[Flow Static Type Checker](https://flow.org/)

We use Flow quite extensively in our projects. This is to ensure consistent data types in our codes as well as serve as technical documentation for the different data structures, APIs and React components that we have.

Configurations are in the `.flowconfig` file.

Do remember to add the `// @flow` directive at the top of every js file.

## ESLint
[ESLint JS Linting Utility](https://eslint.org/)

Having a common code style is important in Datavis. As such, we use ESLint to ensure consistency whenever we code.

Take a look at the `.eslintrc` file.

We especially use the `airbnb` code standard as a base, with a few slight additions:

* Spaces around parameters in parenthesis is *always needed* e.g. `function fn ( a ) { console.log( 'called' ); }`. Please consider to let codes _breathe better_. This works the same for curly braces `{ }` and arrays `[ ]`.
* The parenthesis in arrow functions are only needed when there are more than one parameters e.g. `( a, b ) => {}` whilst single parameter arrow functions do not need parenthesis e.g. `a => {}`.
* When writing arrays or objects in multiple lines e.g.   
```javascript
const obj = {  
  a: 1,  
  b: 2,  
};
```  
The last comma at property `b` is required, so that copy pasting work is simpler.

## dotenv-webpack

[dotenv-webpack](https://www.npmjs.com/package/dotenv-webpack)

dotenv-webpack allows us to define _"environment variables"_ even when in the browser (environment variables are usually defined in the server only). This is important when, for example, defining API server URL and port or application tokens. The variables are stored in a `.env` file.

```
API_URL=localhost
API_PORT=8080
APP_TOKEN=abcdefghijklmnopqrstuvwxyz
```

The varibles will be available in `process.env`.

```js
console.log( process.env.API_URL );
console.log( process.env.API_PORT );
console.log( process.env.APP_TOKEN );
```

These environment variables will of course be different from scenario to scenario (e.g. development to production) or from developer to developer. The `.env` file is therefore git ignored. Instead, we commit a `.env.example` file for others to use with default or example settings. Just make sure you remember to run `cp .env.example .env` to copy the example file to a real `.env` when you have freshly cloned a project.

## Visual Studio Code
[Visual Studio Code](https://code.visualstudio.com/)

Assuming you're already using VS Code, ESLint and Flow can be utilised directly in the IDE by installing the following extensions in the Marketplace:

* [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [Flow Language Support](https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode)

These extensions will read the `.eslintrc` and `.flowconfig` files above and automatically configure the extensions to the standards that Datavis uses.

To enable automatic linting of your code every time you save a file, go to settings, search for `Eslint: Auto Fix On Save` and enable. This will save you a lot of time needed to style your code e.g. putting spaces in parenthesis and identing code properly.

## Husky and lint-staged

[Code consistency with ESLint and Husky](https://www.orangejellyfish.com/blog/code-consistency-with-eslint-and-husky/)

Additionally, to ensure code is linted properly before they are comitted to repositories, we use a Git hook that fixes linting issues automatically.

## Code Quality Tools

### Webpack Bundle Analyzer

[Webpack Bundle Analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer)

Visualizes the size of the resulting bundle in the application. Too big a bundle means a client will need to download and wait for a long time before the application runs, which might give a bad user experience.

To profile how bundle sizes will look like in production:
```shell
yarn run build
yarn run bundle:profile
yarn run bundle:analyze
```

### Flow Coverage Report

[flow-coverage-report](https://www.npmjs.com/package/flow-coverage-report)

Checks how well the codes in the application has been _flow typed_. A low coverage score prevents Flow from checking the codes properly, although Flow will report that there might be little or no errors.

To see a Flow coverage report:
```shell
yarn run flow:coverage
```

### NPM Check

[npm-check](https://www.npmjs.com/package/npm-check)

Checks if NPM dependencies are unused or are outdated. Unused dependencies might increase the bundle size as well as build times, but are not `import`ed or `require`d in the codes.

To run a NPM dependency check:
```shell
yarn run npm-check
```

