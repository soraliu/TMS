# Response

```json
{
  "data": {}
}
```

# Error Handling

```json
{
  "error": {
    "code": 1000000,
    "message": "xxx"
  }
}
```

All of errors are handled in service, so, in controller, we only need to catch it without any bussiness logic.

```js
// app/service/xxx.js
try {
  ...
} catch (err) {
  switch (err) {
    case xx:
      ...
    case yy:
      ...
    default:
      ...
  }
  throw err;
}

// app/controller/xxx.js
try {
  ...
} catch(e) {
  ctx.body = e;
}
```
