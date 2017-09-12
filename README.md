# express-humps

[![Build Status](https://travis-ci.org/zzswang/express-humps.svg?branch=master)](https://travis-ci.org/zzswang/express-humps)


This express middleware is born for prettifing request and reponse json.

Each key from request body and query will change format to camelcase.
And send response back with snakecase.

## only if

1. If we want json's keys in snakecase.
```json
{
  "some_prop": "value"
}
```
2. We want to use camelcase in javascript code.
```javascript
const object = {
  someProp: 'value',
};
```

Then you should use this middleware.


## usage

```
npm install express-humps --save
```


```js
import humps from 'express-humps';

app.use(humps());
```