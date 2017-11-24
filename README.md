# Module Error Handler

This module is used to send metrics in graphite

## Install

To install it in your project, think to fix the version using this kind of command :

```
yarn add Ogury/module-error#v1.X.X
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

# Work on it

## Quickstart

```
yarn install
yarn build
```

## Tests

```
yarn test
```