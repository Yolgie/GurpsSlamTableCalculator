# GURPS Slam Table Calculator

[![NPM Build and Deploy to Github Pages](https://github.com/Yolgie/GurpsSlamTableCalculator/actions/workflows/buildAndDeploy.yml/badge.svg)](https://github.com/Yolgie/GurpsSlamTableCalculator/actions/workflows/buildAndDeploy.yml)
[![Github Super Linter](https://github.com/Yolgie/GurpsSlamTableCalculator/actions/workflows/superlinter.yml/badge.svg)](https://github.com/Yolgie/GurpsSlamTableCalculator/actions/workflows/superlinter.yml)
[![CodeQL](https://github.com/Yolgie/GurpsSlamTableCalculator/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/Yolgie/GurpsSlamTableCalculator/actions/workflows/codeql-analysis.yml)

A Vue 3 + TypeScript application to calculate slam damage tables for GURPS characters based on HP and speed values.

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Run tests
npm test

# Lint and fix code
npm run lint
```

## Deployment

The app automatically deploys to GitHub Pages on every push to `main`:
1. GitHub Actions runs tests and build (`buildAndDeploy.yml`)
2. Build output is deployed to `gh-pages` branch
3. Accessible at: https://yolgie.github.io/GurpsSlamTableCalculator/

## Tech Stack

Vue • TypeScript • Vite • Vitest • ESLint

## Disclaimer

GURPS is a trademark of Steve Jackson Games, and its rules and art are copyrighted by Steve Jackson Games. All rights are reserved by Steve Jackson Games. This game aid is the original creation of Matthias Holzinger and is released for free distribution, and not for resale, under the permissions granted in the [Steve Jackson Games Online Policy](http://www.sjgames.com/general/online_policy.html).
