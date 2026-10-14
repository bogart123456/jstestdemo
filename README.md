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

## Continuous Integration (Jenkins)

A Freestyle job named **`JS-Test-Job`** runs on Jenkins
(<http://localhost:8080>, running in Docker from `jenkins/jenkins:lts`).

* **SCM:** Git — `https://github.com/bogart123456/jstestdemo.git`, branch `*/main`
* **Trigger:** Poll SCM — `H/2 * * * *` (every 2 minutes)
* **Build environment:** Provide Node & npm bin/ folder to PATH → `NodeJS-20`
* **Build step (Execute shell):**

```bash
npm install
npm test
```

Polling is used instead of a webhook because a locally-run Jenkins is not
reachable from GitHub.

### Pipeline status

| Step | Expected |
| --- | --- |
| Checkout | `git checkout` of `origin/main` |
| Install | `npm install` (Jest devDependency) |
| Test | `npm test` → Jest suite passes |
