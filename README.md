# Universal Tamagui Forge

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![GitHub stars](https://img.shields.io/github/stars/sleda/universal-tamagui-forge?style=social)](https://github.com/sleda/universal-tamagui-forge)

Production‑ready full‑stack starter for universal apps (iOS, Android, Web). Forge a typesafe foundation with Tamagui UI, Expo SDK 54, React 19, and Next.js.

## Key Features

- Universal UI with Tamagui and a single design system
- Modern stack: Expo SDK 54, React 19, React Native 0.81, Next.js
- Monorepo with Turborepo and shared packages
- Ready to integrate tRPC, Drizzle, and authentication

## Tech Stack

| Category | Technology | Notes |
| :-- | :-- | :-- |
| Platform | Expo SDK 54, Next.js 14/15, React 19 | Modern, performant base |
| UI | Tamagui | Cross‑platform component library |
| API (optional) | tRPC v11 | End‑to‑end type safety |
| Database (optional) | Drizzle ORM | Type‑safe, SQL‑friendly ORM |
| Auth (optional) | Better‑Auth | Optimized for universal monorepos |
| Monorepo | Turborepo | Yarn or pnpm |
| Language | TypeScript | Fully typed |

## Monorepo Structure

```
/
├─ apps/
│  ├─ expo/      # Expo (React Native) app
│  └─ next/      # Next.js (Web) app
└─ packages/
   ├─ app/       # Shared application layer
   ├─ config/    # Tamagui/theme config
   └─ ui/        # Shared Tamagui components
```

## Getting Started

Clone
```bash
git clone https://github.com/sleda/universal-tamagui-forge.git
cd universal-tamagui-forge
```

Install
```bash
yarn install
# or: pnpm install
```

Run (development)
```bash
yarn native   # Expo
yarn web      # Next.js
```

## Production

- Web: Deploy the Next app to Vercel
- Mobile: Build with EAS for iOS/Android

## License

MIT
