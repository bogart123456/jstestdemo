# jstestdemo

Minimal NodeJS project used for **Laboratory Activity 5: Jenkins CI for NodeJS Project with Automated Test**.

## Contents

| File | Purpose |
| --- | --- |
| `package.json` | Project manifest; `npm test` runs Jest |
| `sum.js` | Adds two numbers |
| `sum.test.js` | Jest unit tests for `sum` |
| `index.js` | Entry point (re-exports `sum`) |

## Local usage

```bash
npm install
npm test
```

## Jenkins

A Freestyle job named `JS-Test-Job` polls this repository (`H/2 * * * *`) and runs:

```bash
npm install
npm test
```
