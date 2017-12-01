# Error Middleware

This module is used to send metrics in graphite

## Warning

To run `npm install` or `yarn install` in your project with this module in it you need to store your key in a ssh-agent or in your MacOs Keychain : https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/

## Install

To install it in your project, think to fix the version using this kind of command :

```
yarn add Ogury/module-error#^1.X.X
```

## Usage

How to use the Error Handler, add it to express

```javascript
import errorHandler from 'module-error';

const app = express();

app.use(errorHandler);
app.use('/', controllers);

app.listen(3000);
```

## Contribute

### Quickstart

```
yarn install
yarn build
```

### Tests

```
yarn test
```