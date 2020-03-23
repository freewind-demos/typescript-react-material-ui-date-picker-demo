TypeScript React "material-ui" Date Picker Demo
===============================================

对于"@material-ui/pickers" 3.x, 必须使用1.3.x的`@date-io/date-fns`或者`@date-io/moment`，
否则会报各种函数找不到的错误。

但相应的moment和date-fns可以使用最新版本。

https://material-ui-pickers.dev/getting-started/installation

```
Important: For material-ui-pickers v3 use v1.x version of @date-io adapters.

npm i @date-io/date-fns@1.x date-fns
// or
npm i @date-io/moment@1.x moment
// or
npm i -s @date-io/luxon@1.x luxon
// or
npm i -s @date-io/dayjs@1.x dayjs
```

```
npm install
npm run demo
```
